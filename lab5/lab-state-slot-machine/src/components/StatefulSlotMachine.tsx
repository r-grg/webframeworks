import { useMemo, useState, useCallback } from "react";
import stylesMachine from "./SlotMachine.module.css";
import { Slot } from "./Slot";

/** Aantal symbolen in je sprite-set (0..4) */
const SYMBOL_COUNT = 5;
const rand = () => Math.floor(Math.random() * SYMBOL_COUNT);

type Props = {
  /** Aantal rollen; default 3 (zoals in de opdracht/screenshot) */
  slots?: number;
  /** Startsaldo; default 100 */
  startMoney?: number;
};

export function StatefulSlotMachine({ slots = 3, startMoney = 100 }: Props) {
  // --- state: rollen + saldo ---
  const initialRoll = useMemo(
    () => Array.from({ length: Math.max(1, slots) }, rand),
    [slots]
  );
  const [values, setValues] = useState<number[]>(initialRoll);
  const [money, setMoney] = useState<number>(startMoney);

  // Helpers om winst/verlies te bepalen (regels uit opdracht)
  const allEqual = useMemo(
    () => values.every((v) => v === values[0]),
    [values]
  );
  const allDifferent = useMemo(() => {
    const s = new Set(values);
    return s.size === values.length; // bij 3 rollen => 3 unieke waarden
  }, [values]);

  const canPlay = money > 0;

  const pullLever = useCallback(() => {
    if (!canPlay) return;

    // 1) rol nieuwe waarden
    const next = Array.from({ length: values.length }, rand);

    // 2) bereken resultaat op basis van "oude of nieuwe"?
    //    We baseren ons op de NIEUWE rol (logischer: resultaat van de spin).
    const nextAllEqual = next.every((v) => v === next[0]);
    const nextAllDifferent = new Set(next).size === next.length;

    setValues(next);

    // 3) update saldo
    setMoney((prev) => {
      if (nextAllEqual) return prev + 20;
      if (nextAllDifferent) return Math.max(0, prev - 1);
      // niet expliciet gespecificeerd -> geen wijziging
      return prev;
    });
  }, [values.length, canPlay]);

  return (
    <section className={stylesMachine.machine}>
      <header className={stylesMachine.header}>
        <h2 className={stylesMachine.title}>SlotMachine ({values.length} slots)</h2>
        <p>
          Saldo: <strong>€{money}</strong>
        </p>
      </header>

      <div
        className={stylesMachine.grid}
        style={{ gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))` }}
      >
        {/* “Hendel” als eerste kolom links zoals in de schets */}
        <button
          type="button"
          onClick={pullLever}
          disabled={!canPlay}
          className={canPlay ? stylesMachine.win : stylesMachine.lose}
          style={{ borderRadius: 12, border: "1px solid #e6e6e6", padding: 12 }}
          aria-disabled={!canPlay}
        >
          Pull<br/>lever
        </button>

        {values.map((v, i) => (
          <Slot key={i} value={v} />
        ))}
      </div>

      <footer className={stylesMachine.footer}>
        <p className={allEqual ? stylesMachine.win : allDifferent ? stylesMachine.lose : ""}>
          {allEqual
            ? "Je hebt gewonnen (+€20)"
            : allDifferent
            ? "Je hebt verloren (-€1)"
            : "Bijna! (geen wijziging)"}
        </p>

        {!canPlay && (
          <small className={stylesMachine.lose}>
            Je hebt geen geld meer. De hendel is uitgeschakeld.
          </small>
        )}
      </footer>
    </section>
  );
}
