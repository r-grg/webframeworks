import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

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
        color: "#334155", 
      }}
    >
      <div style={{ width: "min(1100px, 100%)", display: "grid", gap: 16 }}>
        <NavBar />
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 16,
            minHeight: 400,
          }}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
}
