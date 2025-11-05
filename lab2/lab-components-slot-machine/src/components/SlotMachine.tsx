import { useMemo } from "react";
import stylesMachine from "./SlotMachine.module.css";
import { Slot } from "./Slot";


type SlotMachineProps = {
/** Aantal rollen */
slots: number;
/** Optioneel: seed-achtige trigger om opnieuw te rollen wanneer waarde wijzigt */
rerollKey?: string | number;
};


const randInt = (maxExclusive: number) => Math.floor(Math.random() * maxExclusive);


export function SlotMachine({ slots, rerollKey }: SlotMachineProps) {
const values = useMemo(() => {
const len = Math.max(1, Math.floor(slots));
return Array.from({ length: len }, () => randInt(5));
// dependency op rerollKey laat herberekenen bij prop-wijziging
}, [slots, rerollKey]);


// Winnen: alle waarden gelijk?
const isWin = useMemo(() => values.every((v) => v === values[0]), [values]);


return (
<section className={stylesMachine.machine}>
<header className={stylesMachine.header}>
<h2 className={stylesMachine.title}>SlotMachine ({values.length} slots)</h2>
<p className={isWin ? stylesMachine.win : stylesMachine.lose}>
{isWin ? "Je hebt gewonnen" : "Je hebt verloren"}
</p>
</header>


<div
className={stylesMachine.grid}
style={{ gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))` }}
>
{values.map((v, i) => (
<Slot key={i} value={v} />
))}
</div>


<footer className={stylesMachine.footer}>
<small className={stylesMachine.muted}>
Waardes: {values.map((v, i) => (
<span key={i}>{v}{i < values.length - 1 ? ", " : ""}</span>
))}
</small>
</footer>
</section>
);
}