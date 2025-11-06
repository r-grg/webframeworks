import { NavLink } from "react-router-dom";

const link = (isActive: boolean) => ({
  padding: "8px 10px",
  borderRadius: 8,
  textDecoration: "none",
  border: `1px solid #e5e7eb`,
  background: isActive ? "#e5e7eb" : "#fff",
  color: "#111",
});

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <NavLink to="/" style={({ isActive }) => link(isActive)}>Home</NavLink>
      <NavLink to="/quiz/easy" style={({ isActive }) => link(isActive)}>Easy</NavLink>
      <NavLink to="/quiz/medium" style={({ isActive }) => link(isActive)}>Medium</NavLink>
      <NavLink to="/quiz/hard" style={({ isActive }) => link(isActive)}>Hard</NavLink>
    </nav>
  );
}
