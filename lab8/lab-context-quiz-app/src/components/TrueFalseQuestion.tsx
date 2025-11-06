import { useTheme } from "../context/ThemeContext";

type Props = {
  question: string;
  selected: string | null;
  correct: string;
  locked: boolean;
  onSelect: (answer: string) => void;
};

export default function TrueFalseQuestion({
  question, selected, correct, locked, onSelect
}: Props) {
  const t = useTheme();
  const options = ["True", "False"];
  return (
    <div style={{ display: "grid", gap: 8, color: t.text }}>
      <p style={{ margin: 0 }}>{question}</p>
      <div style={{ display: "flex", gap: 8 }}>
        {options.map((opt) => {
          const isSel = selected === opt;
          const isCorrect = locked && opt === correct;
          const isWrong   = locked && isSel && opt !== correct;
          const bg = isCorrect ? t.correct : isWrong ? t.wrong : t.card;
          const border = isCorrect ? "#16a34a" : isWrong ? "#ef4444" : t.border;
          return (
            <button
              key={opt}
              onClick={() => !locked && onSelect(opt)}
              disabled={locked}
              style={{
                minWidth: 120,
                padding: "10px 12px",
                border: `1px solid ${border}`,
                borderRadius: 10,
                background: bg,
                color: t.text,
                cursor: locked ? "default" : "pointer",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
