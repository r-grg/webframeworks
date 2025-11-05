import TextInput from "./components/TextInput";

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
      <div style={{ width: 800, display: "grid", gap: 16 }}>
        <h1>lab-events-text-input</h1>
        <p>
          Pas een textbox aan om een alert te zien met de positie en nieuwe
          waarde.
        </p>

        {/* Voorbeeld: toon 5 textboxes */}
        <TextInput size={5} />
      </div>
    </main>
  );
}
