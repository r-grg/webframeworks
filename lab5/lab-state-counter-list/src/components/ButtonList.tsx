import { useState } from "react";

export default function ButtonList() {
  // 1 state: een array van getallen
  const [counters, setCounters] = useState<number[]>([]);

  // Voeg een nieuwe counter toe (waarde 0)
  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  // Verhoog één specifieke counter
  const increment = (index: number) => {
    setCounters(
      counters.map((value, i) => (i === index ? value + 1 : value))
    );
  };

  // Verlaag één specifieke counter
  const decrement = (index: number) => {
    setCounters(
      counters.map((value, i) => (i === index ? value - 1 : value))
    );
  };

  // Bereken de som
  const total = counters.reduce((sum, value) => sum + value, 0);

  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        padding: 24,
        width: "min(400px, 100%)",
        margin: "0 auto",
      }}
    >
      <h1>lab-state-counter-list</h1>

      <button onClick={addCounter}>Add counter</button>

      {/* Toon alle counters */}
      {counters.map((value, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid #ccc",
            padding: "8px 12px",
            borderRadius: 8,
          }}
        >
          <span style={{ flexGrow: 1 }}>Counter {i + 1}: {value}</span>
          <button onClick={() => increment(i)}>Increment</button>
          <button onClick={() => decrement(i)}>Decrement</button>
        </div>
      ))}

      {/* Som onderaan */}
      <div
        style={{
          marginTop: 12,
          padding: 12,
          background: "#f8fafc",
          borderRadius: 8,
          fontWeight: "bold",
        }}
      >
        Total: {total}
      </div>
    </div>
  );
}
