import { useState } from "react";
import styles from "./ColorPicker.module.css";

export default function ColorPicker() {
  // 1. State voor huidige kleur
  const [color, setColor] = useState("#000000");

  // 2. Kleur veranderen via color input
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  // 3. Kleur veranderen via select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {/* input type=color */}
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className={styles.colorInput}
      />

      {/* select */}
      <select value={color} onChange={handleSelectChange} className={styles.select}>
        <option value="#000000">#000000</option>
        <option value="#FF0000">#FF0000</option>
        <option value="#00FF00">#00FF00</option>
        <option value="#0000FF">#0000FF</option>
      </select>

      {/* div met achtergrondkleur */}
      <div className={styles.preview} style={{ backgroundColor: color }}></div>
    </div>
  );
}
