import { NavLink } from "react-router-dom";

export default function NavBar() {
  const link = (active: boolean) => ({
    padding: "8px 12px",
    borderRadius: 8,
    textDecoration: "none",
    border: "1px solid #e5e7eb",
    background: active ? "#e5e7eb" : "#fff",
    color: "#111",
  });

  return (
    <nav
      style={{
        display: "flex",
        gap: 8,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <strong>Portfolio</strong>
      <div style={{ display: "flex", gap: 8 }}>
        <NavLink to="/oefening1" style={({ isActive }) => link(isActive)}>
          Oefening 1
        </NavLink>
        <NavLink to="/oefening2" style={({ isActive }) => link(isActive)}>
          Oefening 2
        </NavLink>
        <NavLink to="/oefening3" style={({ isActive }) => link(isActive)}>
          Oefening 3
        </NavLink>
      </div>
    </nav>
  );
}
