import { useState } from "react";

type Cell = 0 | 1;
type Grid = Cell[][];

/** Maakt een grid van rows x columns met willekeurige 0/1 waarden. */
function initializeGrid(rows: number, columns: number): Grid {
  return Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => (Math.random() < 0.5 ? 0 : 1))
  );
}

export default function LifeGameBoard() {
  const [rows, setRows] = useState<number>(15);
  const [cols, setCols] = useState<number>(20);
  const [board, setBoard] = useState<Grid>(() => initializeGrid(15, 20));

  // Vernieuw het bord met huidige rows/cols
  const refreshBoard = () => setBoard(initializeGrid(rows, cols));

  // Draai één cel om
  const flipElement = (r: number, c: number) => {
    setBoard(prev => {
      const copy = prev.map(row => row.slice()); // deep-ish copy
      copy[r][c] = copy[r][c] === 1 ? 0 : 1;
      return copy;
    });
  };

  const cellSize = 22;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h1 style={{color: "black"}}>Game of Life — Board</h1>

      {/* Controls */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <label>
          Rows{" "}
          <input
            type="number"
            min={1}
            value={rows}
            onChange={(e) => setRows(Math.max(1, Number(e.target.value) || 1))}
            style={{ width: 72 }}
          />
        </label>
        <label>
          Columns{" "}
          <input
            type="number"
            min={1}
            value={cols}
            onChange={(e) => setCols(Math.max(1, Number(e.target.value) || 1))}
            style={{ width: 72 }}
          />
        </label>
        <button onClick={refreshBoard}>Vernieuw bord</button>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${board[0]?.length ?? 0}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${board.length}, ${cellSize}px)`,
          gap: 2,
          background: "#e5e7eb",
          padding: 2,
          borderRadius: 8,
          width: "fit-content",
        }}
        aria-label={`Bord ${board.length} x ${board[0]?.length ?? 0}`}
      >
        {board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              role="button"
              tabIndex={0}
              onClick={() => flipElement(r, c)}
              style={{
                width: cellSize,
                height: cellSize,
                background: cell === 1 ? "#16a34a" : "#fff",
                borderRadius: 4,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                cursor: "pointer",
              }}
              title={`(${r}, ${c}) = ${cell}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
