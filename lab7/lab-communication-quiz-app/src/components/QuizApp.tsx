import { useEffect, useMemo, useState } from "react";
import { decode } from "html-entities";
import Question from "./Question";
import type { QuizQuestion, RawQuestion } from "../types";

const shuffle = <T,>(arr: T[]) =>
  arr.map(v => [Math.random(), v] as const).sort((a,b) => a[0]-b[0]).map(([,v]) => v);

async function fetchQuestions(): Promise<QuizQuestion[]> {
  const res = await fetch("https://opentdb.com/api.php?amount=10");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data: { results: RawQuestion[] } = await res.json();

  return data.results.map((r, i) => {
    const correct = decode(r.correct_answer);
    const options =
      r.type === "boolean"
        ? ["True", "False"]
        : shuffle([correct, ...r.incorrect_answers.map(ans => decode(ans))]);
    return {
      id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2,7)}`,
      type: r.type,
      question: decode(r.question),
      options,
      correct,
      category: r.category,
      difficulty: r.difficulty,
    };
  });
}

type Answers = Record<string, string>;         // id -> chosen answer
type Locked = Record<string, boolean>;         // id -> answered/locked

export default function QuizApp() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [locked, setLocked] = useState<Locked>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // initial load
  useEffect(() => { void loadMore(); }, []);

  const loadMore = async () => {
    try {
      setLoading(true);
      setError(null);
      const next = await fetchQuestions();
      setQuestions(prev => [...prev, ...next]); // append, keep old ones
    } catch (e: any) {
      setError(e?.message ?? "Failed to load questions");
    } finally {
      setLoading(false);
    }
  };

  // When user answers: store + lock
  const handleAnswer = (id: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [id]: answer }));
    setLocked(prev => ({ ...prev, [id]: true }));
  };

  // score (for fun)
  const score = useMemo(() => {
    return questions.reduce((s, q) => s + (answers[q.id] === q.correct ? 1 : 0), 0);
  }, [questions, answers]);

  return (
    <div style={{ display: "grid", gap: 16, width: "min(900px, 100%)" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h1 style={{ margin: 0 }}>Quiz App</h1>
        <div style={{ color: "#64748b" }}>
          Questions: {questions.length} • Score: {score}
        </div>
      </header>

      {questions.map((q) => (
        <div
          key={q.id}
          style={{
            border: "1px solid #e5e7eb",
            borderRadius: 12,
            padding: 12,
            background: "#fff",
          }}
        >
          <div style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>
            {q.category} • {q.difficulty}
          </div>

          <Question
            q={q}
            selected={answers[q.id] ?? null}
            locked={!!locked[q.id]}
            onAnswer={handleAnswer}
          />

          {/* Reveal correct answer once locked */}
          {locked[q.id] && (
            <div style={{ marginTop: 10, color: "#334155" }}>
              Correct answer: <strong>{q.correct}</strong>
            </div>
          )}
        </div>
      ))}

      {loading && <p style={{ color: "#64748b" }}>Loading…</p>}
      {error && <p style={{ color: "#dc2626" }}>Error: {error}</p>}

      <button onClick={loadMore} disabled={loading} style={{ justifySelf: "start" }}>
        {loading ? "Loading…" : "Load More"}
      </button>
    </div>
  );
}
