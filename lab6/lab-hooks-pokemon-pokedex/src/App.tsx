import Pokedex from "./components/Pokedex";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
        padding: 24,
        color: "black",
      }}
    >
      <Pokedex limit={151} />
    </main>
  );
}
