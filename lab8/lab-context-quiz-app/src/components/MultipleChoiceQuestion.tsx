import { useTheme } from "../context/ThemeContext";

type Props = {
  question: string;
  options: string[];
  selected: string | null;
  correct: string;
  locked: boolean;
  onSelect: (answer: string) => void;
};

export default function MultipleChoiceQuestion({
  question, options, selected, correct, locked, onSelect
}: Props) {
  const t = useTheme();
  return (
    <div style={{ display: "grid", gap: 8, color: t.text }}>
      <p style={{ margin: 0 }}>{question}</p>
      <div style={{ display: "grid", gap: 8 }}>
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
                textAlign: "left",
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
