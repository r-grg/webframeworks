import { useSettings } from "../context/SettingsContext";
import type { Color } from "../context/SettingsContext";

export default function SelectionBox() {
  const { color, setColor } = useSettings();

  return (
    <label style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value as Color)}
        style={{ padding: "6px 8px" }}
      >
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
      <span style={{ color: "#64748b" }}>current: {color}</span>
    </label>
  );
}
