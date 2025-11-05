import { useMemo, useState } from "react";
import styles from "./ColorSelect.module.css";

const ALL_COLORS = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"] as const;

export default function ColorSelect() {
  // selectie in het <select multiple>
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  // kleuren die we daadwerkelijk tonen (snapshot na klikken op "Show colors")
  const [colors, setColors] = useState<string[]>([]);

  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const values = Array.from(e.target.selectedOptions).map((o) => o.value);
    setSelectedColors(values);
  };

  const showColors = () => setColors(selectedColors);

  const replaceColor = (index: number) => {
    const current = colors[index];
    const next = window.prompt("Enter a new CSS color value:", current);
    if (next && next.trim()) {
      const copy = [...colors];
      copy[index] = next.trim();
      setColors(copy);
    }
  };

  // Voor de preview: evenveel gelijke stroken
  const barFlex = useMemo(() => (colors.length ? `${100 / colors.length}%` : "auto"), [colors.length]);

  return (
    <div className={styles.wrap}>
      {/* Linkerkolom */}
      <div className={styles.left}>
        <select
          multiple
          className={styles.select}
          value={selectedColors}
          onChange={onSelectChange}
          aria-label="color-select"
        >
          {ALL_COLORS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button className={styles.btn} onClick={showColors}>
          Show Colors
        </button>

        <div className={styles.list} aria-label="selected-colors">
          {colors.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className={styles.item}
              onClick={() => replaceColor(i)}
              title="Klik om te wijzigen"
              style={{
                backgroundColor: c,
                color: c === "black" ? "white" : "black", // tekst leesbaar houden
              }}
            >
              {c}
            </div>
          ))}

          {colors.length === 0 && (
            <div style={{ color: "#6b7280" }}>Geen kleuren getoond.</div>
          )}
        </div>

      </div>

      {/* Rechterkolom: preview */}
      <div className={styles.preview} aria-label="preview">
        {colors.map((c, i) => (
          <div key={`${c}-bar-${i}`} className={styles.bar} style={{ background: c, flexBasis: barFlex }} />
        ))}
      </div>
    </div>
  );
}
