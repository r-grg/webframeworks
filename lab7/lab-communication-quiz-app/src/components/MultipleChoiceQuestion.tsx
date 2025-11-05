type MCProps = {
  question: string;
  options: string[];
  selected: string | null;
  correct: string;
  locked: boolean;
  onSelect: (answer: string) => void;
};

export default function MultipleChoiceQuestion({
  question, options, selected, correct, locked, onSelect,
}: MCProps) {
  return (
    <div style={{ display: "grid", gap: 8, color: "#0f172a" }}>
      <p style={{ margin: 0 }}>{question}</p>
      <div style={{ display: "grid", gap: 8 }}>
        {options.map((opt) => {
          const isSelected = selected === opt;
          const isCorrect = locked && opt === correct;
          const isWrongSel = locked && isSelected && opt !== correct;
          const bg = isCorrect ? "#22c55e33" : isWrongSel ? "#ef444433" : "#fff";
          const border = isCorrect ? "#16a34a" : isWrongSel ? "#ef4444" : "#cbd5e1";
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
                color: "#111",
                background: bg,
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
