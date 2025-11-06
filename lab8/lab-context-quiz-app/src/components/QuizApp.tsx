import { useQuiz } from "../context/QuizContext";
import { useTheme } from "../context/ThemeContext";
import Question from "./Question";

export default function QuizApp() {
  const qz = useQuiz();
  const t = useTheme();

  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        width: "min(900px, 100%)",
        color: t.text,
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: t.text,
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Quiz App</h1>
          <div style={{ color: t.subtle }}>
            Questions: {qz.questions.length} • Score: {qz.score}
          </div>
        </div>
        <button
          onClick={() => t.setMode(t.mode === "dark" ? "light" : "dark")}
          style={{ padding: "8px 10px", borderRadius: 8, border: `1px solid ${t.border}`, background: t.card, color: t.text }}
        >
          {t.mode === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </header>

      {qz.questions.map((q) => (
        <div
          key={q.id}
          style={{
            border: `1px solid ${t.border}`,
            borderRadius: 12,
            padding: 12,
            background: t.card,
          }}
        >
          <div style={{ fontSize: 12, color: t.subtle, marginBottom: 6 }}>
            {q.category} • {q.difficulty}
          </div>

          <Question id={q.id} />

          {qz.locked[q.id] && (
            <div style={{ marginTop: 10 }}>
              Correct answer: <strong>{q.correct}</strong>
            </div>
          )}
        </div>
      ))}

      {qz.loading && <p style={{ color: t.subtle }}>Loading…</p>}
      {qz.error && <p style={{ color: "#ef4444" }}>Error: {qz.error}</p>}

      <button
        onClick={qz.loadMore}
        disabled={qz.loading}
        style={{
          justifySelf: "start",
          padding: "8px 10px",
          borderRadius: 8,
          border: `1px solid ${t.border}`,
          background: t.card,
          color: t.text,
        }}
      >
        {qz.loading ? "Loading…" : "Load More"}
      </button>
    </div>
  );
}
