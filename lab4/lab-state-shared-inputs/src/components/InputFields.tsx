import { useState, type ChangeEvent } from "react";

export default function InputFields() {
  // Eén stuk state dat door alle inputs gedeeld wordt
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 8,
        width: 800,
        maxWidth: "100%",
      }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <input
          key={i}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={`veld ${i + 1}`}
          style={{ padding: "6px 8px" }}
        />
      ))}
    </div>
  );
}
