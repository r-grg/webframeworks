import { useState } from "react";
import { letters, type AlienLetter } from "../data/alien";

export default function AlienAlphabet() {
  const [selected, setSelected] = useState<AlienLetter[]>([]);

  const add = (item: AlienLetter) => setSelected((prev) => [...prev, item]);
  const backspace = () =>
    setSelected((prev) => (prev.length ? prev.slice(0, -1) : prev));
  const clear = () => setSelected([]);

  return (
    <div style={{ display: "grid", gap: 16, width: "min(900px, 100%)" }}>
      {/* <h1>Alien Alphabet</h1> */}

      {/* Grid met alle letters (als buttons) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
          gap: 8,
        }}
      >
        {letters.map((l) => (
          <button
            key={`${l.human}-${l.alien}`}
            onClick={() => add(l)}
            title={l.human}
            style={{
              padding: 4,
              border: "1px solid #d1d5db",
              borderRadius: 8,
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <img
              src={l.alien}
              alt={`alien '${l.human}'`}
              style={{ width: "100%", height: 48, objectFit: "contain" }}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Actieknoppen */}
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={backspace}>Backspace</button>
        <button onClick={clear}>Clear</button>
      </div>

      {/* Gekozen letters */}
      <section style={{ display: "grid", gap: 8 }}>
        <h2 style={{ margin: 0, fontSize: 16 }}>Selected</h2>

        {selected.length === 0 ? (
          <p style={{ color: "#64748b" }}>Nothing yet — click an alien letter.</p>
        ) : (
          <>
            {/* Als plaatjes */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {selected.map((l, i) => (
                <img
                  key={`${l.human}-${i}`}
                  src={l.alien}
                  alt={`selected ${l.human}`}
                  style={{ width: 40, height: 40, objectFit: "contain" }}
                />
              ))}
            </div>

            {/* Als menselijke tekst */}
            <div style={{ color: "#334155", fontSize: 18 }}>
              {selected.map((l) => l.human).join("")}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
