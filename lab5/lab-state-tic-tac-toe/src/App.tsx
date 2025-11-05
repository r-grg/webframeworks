import TicTacToe from "./components/TicTacToe";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#eef2f7",
        color: "black",
      }}
    >
      <TicTacToe />
    </main>
  );
}
