import { useMemo } from "react";
import ColorSquare from "./components/ColorSquare";
import "./App.css";

function randomHexColor() {
  // #RRGGBB
  return (
    "#" +
    Array.from({ length: 6 }, () =>
      "0123456789ABCDEF"[Math.floor(Math.random() * 16)]
    ).join("")
  );
}

export default function App() {
  // één keer 10 kleuren genereren, niet bij elke render
  const colors = useMemo(() => Array.from({ length: 10 }, randomHexColor), []);

  const handleSquareClick = (color: string) => {
    alert(`Color: ${color}`);
  };

  return (
    <main className="page">
      <h1>Color Clicker</h1>
      <div className="row">
        {colors.map((c, i) => (
          <ColorSquare key={i} color={c} size={80} onClick={handleSquareClick} />
        ))}
      </div>
    </main>
  );
}
