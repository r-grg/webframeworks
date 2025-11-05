import CheckBox from "./components/CheckBox";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <div style={{ display: "grid"}}>
        <h1>lab-events-checkbox-grid</h1>
        <p>
          Klik op een checkbox om een alert te tonen met de positie en status (aan/uit).
        </p>

        {/* Voorbeeld: 4x4 grid */}
        <CheckBox size={20} />
      </div>
    </main>
  );
}
