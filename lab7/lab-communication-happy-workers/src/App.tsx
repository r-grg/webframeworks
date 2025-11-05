import { useState } from "react";
import Square from "./components/Square";

export default function App() {
  const [work, setWork] = useState(0); // 0..100

  const addWork = (delta: number) => {
    if (work >= 100) return;
    setWork((w) => Math.min(100, w + delta));
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "grid",
        gap: 16,
        placeItems: "center",
        padding: 24,
        background: "#f8fafc",
        color: "#111",
      }}
    >
      <h1>Happy Workers</h1>

      {/* Progress bar */}
      <div
        style={{
          width: 420,
          height: 14,
          background: "#e5e7eb",
          borderRadius: 8,
          overflow: "hidden",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
        }}
      >
        <div
          style={{
            width: `${work}%`,
            height: "100%",
            background: work < 100 ? "#22c55e" : "#7c3aed",
            transition: "width .15s",
          }}
        />
      </div>
      <div style={{ color: "#64748b" }}>{work}%</div>

      {/* Workers */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 110px)",
          gap: 8,
        }}
      >
        <Square color="#ef4444" work={work} onWork={addWork} />
        <Square color="#22c55e" work={work} onWork={addWork} />
        <Square color="#fbbf24" work={work} onWork={addWork} />
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setWork(0)}>Reset</button>
        <button onClick={() => setWork(100)}>Instant Done</button>
      </div>
    </main>
  );
}
