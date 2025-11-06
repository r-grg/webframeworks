import { useSettings } from "../context/SettingsContext";

const nextColor: Record<"red" | "blue" | "green", "red" | "blue" | "green"> = {
  red: "blue",
  blue: "green",
  green: "red",
};

export default function Square() {
  const { color, setColor } = useSettings();

  return (
    <button
      onClick={() => setColor(nextColor[color])}
      title="Click to cycle color"
      style={{
        width: 100,
        height: 100,
        margin: 10,
        background: color,
        border: "2px solid #111",
        borderRadius: 6,
        cursor: "pointer",
      }}
    />
  );
}
