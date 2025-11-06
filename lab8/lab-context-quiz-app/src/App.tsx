import { Outlet } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import NavBar from "./components/NavBar";

export default function App() {
  const t = useTheme(); // safe now—App is inside ThemeProvider
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: t.bg,
        color: t.text,
        padding: 24,
      }}
    >
      <div style={{ width: "min(900px, 100%)" }}>
        <NavBar />
        <Outlet />
      </div>
    </main>
  );
}
