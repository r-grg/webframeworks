import { useState } from "react";
import "./App.css";

const COLORS = ["red", "blue", "green"] as const;
const EMOTIONS = [":(", ":|", ":)"] as const;

export default function App() {
  // state
  const [name, setName] = useState("Joske");
  const [colorIndex, setColorIndex] = useState(0);        // 0=red,1=blue,2=green
  const [emotion, setEmotion] = useState<(typeof EMOTIONS)[number]>(":(");
  const [isSquare, setIsSquare] = useState(true);         // toggle vierkant/cirkel

  const color = COLORS[colorIndex];

  // klik op Joske => volgende kleur
  const handleSquareClick = () => {
    setColorIndex((i) => (i + 1) % COLORS.length);
  };

  // reset naam naar Joske
  const resetName = () => setName("Joske");

  return (
    <div className="container">
      <p><b>{name}</b></p>

      <div
        className={`square ${isSquare ? "" : "circle"}`}
        style={{ backgroundColor: color }}
        onClick={handleSquareClick}
        title="Klik om van kleur te veranderen"
        role="button"
        aria-label="Joske"
      >
        <p>{emotion}</p>
      </div>

      {/* Besturing */}
      <div className="controls">
        <input
          aria-label="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={resetName}>Reset Name</button>

        <select
          aria-label="emotion"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value as typeof EMOTIONS[number])}
        >
          {EMOTIONS.map((emo) => (
            <option key={emo} value={emo}>{emo}</option>
          ))}
        </select>

        <label>
          <input
            type="checkbox"
            checked={isSquare}
            onChange={(e) => setIsSquare(e.target.checked)}
          />{" "}
          Square
        </label>
      </div>
    </div>
  );
}
