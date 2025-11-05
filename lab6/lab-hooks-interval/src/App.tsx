import Timer from "./components/Timer";
import CurrentTime from "./components/CurrentTime";
import RandomValue from "./components/RandomValue";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
        color:"black"
      }}
    >
      <div style={{ display: "grid", gap: 20, textAlign: "center" }}>
        <h1>lab-hooks-interval</h1>
        <Timer />
        <CurrentTime />
        <RandomValue min={1} max={100} />
      </div>
    </main>
  );
}
