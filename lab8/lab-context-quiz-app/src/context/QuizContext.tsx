import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { decode } from "html-entities";

export type RawQuestion = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuizQuestion = {
  id: string;
  type: "multiple" | "boolean";
  question: string;
  options: string[]; // shuffled
  correct: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
};

type QuizContextValue = {
  questions: QuizQuestion[];
  loading: boolean;
  error: string | null;
  answers: Record<string, string>;
  locked: Record<string, boolean>;
  score: number;
  loadMore: () => Promise<void>;
  answer: (id: string, value: string) => void;
};

const QuizContext = createContext<QuizContextValue | null>(null);
export const useQuiz = () => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used inside <QuizProvider>");
  return ctx;
};

const shuffle = <T,>(arr: T[]) =>
  arr.map(v => [Math.random(), v] as const).sort((a,b)=>a[0]-b[0]).map(([,v])=>v);

export type Difficulty = "easy" | "medium" | "hard";
async function fetchQuestions(difficulty: Difficulty): Promise<QuizQuestion[]> {
  const res = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data: { results: RawQuestion[] } = await res.json();
  // …map/decode/shuffle same as before…
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

export function QuizProvider({
  children,
  difficulty,
}: {
  children: React.ReactNode;
  difficulty: Difficulty;
}) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [locked, setLocked] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🔁 (Re)load when difficulty changes
  useEffect(() => {
    setQuestions([]); setAnswers({}); setLocked({}); // reset quiz
    void loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty]);

  const loadMore = async () => {
    try {
      setLoading(true); setError(null);
      const next = await fetchQuestions(difficulty);
      setQuestions(prev => [...prev, ...next]);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  const answer = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    setLocked(prev => ({ ...prev, [id]: true }));
  };

  const score = useMemo(
    () => questions.reduce((s, q) => s + (answers[q.id] === q.correct ? 1 : 0), 0),
    [questions, answers]
  );

  const value = { questions, loading, error, answers, locked, score, loadMore, answer };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
