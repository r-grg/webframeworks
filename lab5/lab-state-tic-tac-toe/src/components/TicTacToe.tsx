import { useState } from "react";

type Cell = "" | "X" | "O";
type Winner = "X" | "O" | "draw" | null;

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
  [0, 4, 8], [2, 4, 6],            // diagonals
];

function calcWinner(board: Cell[]): Winner {
  for (const [a, b, c] of LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as "X" | "O";
    }
  }
  return board.every((c) => c) ? "draw" : null;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(""));
  const [player, setPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<Winner>(null);

  const handleClick = (index: number) => {
    if (winner || board[index]) return; // stop if game over or cell filled

    const next = [...board];
    next[index] = player;
    const w = calcWinner(next);

    setBoard(next);
    setWinner(w);

    if (!w) setPlayer((p) => (p === "X" ? "O" : "X"));
  };

  const reset = () => {
    setBoard(Array(9).fill(""));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h1>Tic Tac Toe</h1>

      {winner ? (
        <p>
          {winner === "draw" ? "It's a draw!" : (
            <>Winner: <strong>{winner}</strong></>
          )}
        </p>
      ) : (
        <p>Turn: <strong>{player}</strong></p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gridTemplateRows: "repeat(3, 100px)",
          gap: 6,
        }}
      >
        {board.map((cell, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            role="button"
            tabIndex={0}
            style={{
              display: "grid",
              placeItems: "center",
              fontSize: 36,
              fontWeight: 700,
              border: "2px solid #334155",
              borderRadius: 8,
              background: "#f8fafc",
              cursor: winner || cell ? "not-allowed" : "pointer",
              userSelect: "none",
            }}
          >
            {cell}
          </div>
        ))}
      </div>

      <button onClick={reset} style={{ justifySelf: "start" }}>
        Reset
      </button>
    </div>
  );
}
