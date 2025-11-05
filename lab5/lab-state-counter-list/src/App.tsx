import ButtonList from "./components/ButtonList";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f1f5f9",
        color: "black",
      }}
    >
      <ButtonList />
    </main>
  );
}
