import { useState, type ChangeEvent } from "react";
import { useInterval } from "./hooks/useInterval";

export default function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);
  const [delay, setDelay] = useState(1000); // ms

  // Verhoog teller elke 'delay' ms zolang running === true
  useInterval(() => setCount((c) => c + 1), delay, running);

  const handleDelayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setDelay(Number.isFinite(v) && v >= 0 ? v : 0);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
        padding: 24,
        color: "black",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 12,
          padding: 16,
          width: 420,
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          boxShadow: "0 8px 20px rgba(0,0,0,.06)",
        }}
      >
        <h1 style={{ margin: 0 }}>lab-hooks-use-timeout</h1>

        <div style={{ fontSize: 32, fontWeight: 700, textAlign: "center" }}>
          {count}
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button onClick={() => setRunning((r) => !r)}>
            {running ? "Pause" : "Start"}
          </button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          Delay (ms):
          <input
            type="number"
            min={0}
            step={100}
            value={delay}
            onChange={handleDelayChange}
            style={{ width: 120 }}
          />
        </label>

        <p style={{ color: "#64748b", marginTop: 8 }}>
          Interval is <strong>{running ? "running" : "paused"}</strong> every{" "}
          <strong>{delay}</strong> ms.
        </p>
      </div>
    </main>
  );
}
