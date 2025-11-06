import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <h1>Choose difficulty</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <Link to="/quiz/easy">Easy</Link>
        <Link to="/quiz/medium">Medium</Link>
        <Link to="/quiz/hard">Hard</Link>
      </div>
    </div>
  );
}
