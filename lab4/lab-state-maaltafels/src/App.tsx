import { useState, type ChangeEvent } from "react";
import MultiplicationTable from "./components/MultiplicationTable";
import "./index.css";

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export default function App() {
  // max is bestuurbaar, beginnend op 5
  const [max, setMax] = useState<number>(5);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = parseInt(e.target.value, 10);
    // voorkom NaN en dwing bereik 2..10 af
    setMax(clamp(isNaN(raw) ? 2 : raw, 2, 10));
  };

  return (
    <div className="wrapper">
      <div style={{ display: "grid", gap: 12 }}>
        <label>
          <span style={{ marginRight: 8 }}>Max:</span>
          <input
            type="number"
            min={2}
            max={10}
            value={max}
            onChange={handleChange}
            style={{ width: 56 }}
          />
        </label>

        <MultiplicationTable max={max} />
      </div>
    </div>
  );
}
