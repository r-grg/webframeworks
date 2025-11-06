import { createContext, useContext, useState } from "react";
type Color = "red" | "green" | "blue";
type Ctx = { color: Color; setColor: (c: Color) => void };
const Settings = createContext<Ctx | null>(null);
const useSettings = () => {
  const v = useContext(Settings);
  if (!v) throw new Error("useSettings outside provider");
  return v;
};

const Square = () => {
  const { color, setColor } = useSettings();
  const next: Record<Color, Color> = { red: "blue", blue: "green", green: "red" };
  return (
    <button
      onClick={() => setColor(next[color])}
      title="click to cycle color"
      style={{ width:100, height:100, margin:10, background:color, border:"2px solid #111", borderRadius:6 }}
    />
  );
};

const SquareRow = () => (
  <div style={{ display: "flex" }}>
    <Square /><Square /><Square />
  </div>
);

const SelectionBox = () => {
  const { color, setColor } = useSettings();
  return (
    <select value={color} onChange={(e)=>setColor(e.target.value as Color)}>
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="green">green</option>
    </select>
  );
};

export default function Oefening2() {
  const [color, setColor] = useState<Color>("red");
  return (
    <Settings.Provider value={{ color, setColor }}>
      <h2>Basic Context – Settings</h2>
      <SelectionBox />
      <SquareRow />
    </Settings.Provider>
  );
}
