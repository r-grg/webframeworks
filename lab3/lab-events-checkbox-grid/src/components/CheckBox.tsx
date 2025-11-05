import { useState, type ChangeEvent } from "react";

type CheckBoxProps = {
  size: number; // grootte van de grid (bvb. 3 = 3x3)
};

export default function CheckBox({ size }: CheckBoxProps) {
  // Maak een 2D-array van booleans (allemaal false bij start)
  const [grid, setGrid] = useState<boolean[][]>(
    Array.from({ length: size }, () => Array(size).fill(false))
  );

  const handleChange = (row: number, col: number, e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    // Kopieer grid en update waarde
    const newGrid = grid.map((r, i) =>
      i === row ? r.map((val, j) => (j === col ? checked : val)) : r
    );

    setGrid(newGrid);
    alert(`Checkbox [${row + 1}, ${col + 1}] is ${checked ? "aangevinkt" : "uitgevinkt"}`);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gap: "8px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((checked, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="checkbox"
            checked={checked}
            onChange={(e) => handleChange(rowIndex, colIndex, e)}
          />
        ))
      )}
    </div>
  );
}
