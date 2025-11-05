import { useEffect, useMemo, useState } from "react";

type Cell = 0 | 1;
type Grid = Cell[][];

const rand = (): Cell => (Math.random() < 0.5 ? 0 : 1);
const makeGrid = (r: number, c: number): Grid =>
  Array.from({ length: r }, () => Array.from({ length: c }, rand));

export default function LifeGame() {
  const [rows, setRows] = useState(15);
  const [cols, setCols] = useState(20);
  const [board, setBoard] = useState<Grid>(() => makeGrid(15, 20));
  const [running, setRunning] = useState(false);

  // ----- rules helpers
  const inBounds = (r: number, c: number) =>
    r >= 0 && r < rows && c >= 0 && c < cols;

  const countAliveNeighbors = (g: Grid, r: number, c: number): number => {
    let n = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr === 0 && dc === 0) continue;
        const rr = r + dr, cc = c + dc;
        if (inBounds(rr, cc) && g[rr][cc] === 1) n++;
      }
    }
    return n;
  };

  /** Compute next generation per Conway rules */
  const step = (g: Grid): Grid => {
    const next: Grid = g.map(row => row.slice() as Cell[]);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const alive = g[r][c] === 1;
        const neighbors = countAliveNeighbors(g, r, c);

        if (alive && neighbors < 2) next[r][c] = 0;             // Rule 1
        else if (alive && (neighbors === 2 || neighbors === 3)) next[r][c] = 1; // Rule 2
        else if (alive && neighbors > 3) next[r][c] = 0;        // Rule 3
        else if (!alive && neighbors === 3) next[r][c] = 1;     // Rule 4
        else next[r][c] = g[r][c];
      }
    }
    return next;
  };

  // ----- UI actions
  const flip = (r: number, c: number) =>
    setBoard(prev => {
      const copy = prev.map(row => row.slice()) as Grid;
      copy[r][c] = copy[r][c] === 1 ? 0 : 1;
      return copy;
    });

  const reinit = () => setBoard(makeGrid(rows, cols));
  const clear = () =>
    setBoard(Array.from({ length: rows }, () => Array(cols).fill(0) as Cell[]));
  const doStep = () => setBoard(prev => step(prev));

  // ----- PLAY/STOP via interval
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setBoard(prev => step(prev));
    }, 1000);
    return () => clearInterval(id);
  }, [running, rows, cols]); // rows/cols bound the loops in step()

  const cellSize = 22;
  const aliveCount = useMemo(
    () => board.flat().reduce<number>((s, v) => s + v, 0),
    [board]
  );

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h1>Game of Life</h1>

      {/* Controls */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
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
          Cols{" "}
          <input
            type="number"
            min={1}
            value={cols}
            onChange={(e) => setCols(Math.max(1, Number(e.target.value) || 1))}
            style={{ width: 72 }}
          />
        </label>
        <button onClick={reinit}>Randomize</button>
        <button onClick={clear}>Clear</button>
        <button onClick={doStep}>STEP</button>
        <button onClick={() => setRunning(true)} disabled={running}>PLAY</button>
        <button onClick={() => setRunning(false)} disabled={!running}>STOP</button>
        <span style={{ color: "#64748b" }}>
          Alive: {aliveCount} — Size: {rows}×{cols}
        </span>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          gap: 2,
          background: "#e5e7eb",
          padding: 2,
          borderRadius: 8,
          width: "fit-content",
        }}
      >
        {board.map((row, r) =>
          row.map((cell, c) => (
            <div
              key={`${r}-${c}`}
              onClick={() => flip(r, c)}
              role="button"
              tabIndex={0}
              style={{
                width: cellSize,
                height: cellSize,
                background: cell ? "#16a34a" : "#fff",
                borderRadius: 4,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
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
