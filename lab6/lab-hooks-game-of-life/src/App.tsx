import LifeGame from "./components/LifeGame";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background: "#f8fafc",
        color: "black",
      }}
    >
      <LifeGame />
    </main>
  );
}
