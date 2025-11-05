import QuizApp from "./components/QuizApp";

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
        color: "#0f172a",
      }}
    >
      <QuizApp />
    </main>
  );
}
