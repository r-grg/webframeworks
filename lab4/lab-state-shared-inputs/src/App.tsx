import InputFields from "./components/InputFields";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        gap: 16,
      }}
    >
      <div style={{ display: "grid", gap: 12 }}>
        <h1>lab-state-shared-inputs</h1>
        <p>Typ in één invoerveld — alle 5 volgen mee.</p>
        <InputFields />
      </div>
    </main>
  );
}
