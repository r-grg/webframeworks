type TFProps = {
  question: string;
  selected: string | null;
  correct: string;
  locked: boolean;
  onSelect: (answer: string) => void;
};

export default function TrueFalseQuestion({
  question, selected, correct, locked, onSelect,
}: TFProps) {
  const options = ["True", "False"];
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <p style={{ margin: 0 }}>{question}</p>
      <div style={{ display: "flex", gap: 8 }}>
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
                minWidth: 120,
                padding: "10px 12px",
                border: `1px solid ${border}`,
                borderRadius: 10,
                background: bg,
                color: "#111",
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
