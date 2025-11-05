import CounterList from "./components/CounterList";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
        color: "#0f172a",
      }}
    >
      <CounterList />
    </main>
  );
}
