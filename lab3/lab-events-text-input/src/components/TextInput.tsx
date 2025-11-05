import { useState, useEffect, type ChangeEvent } from "react";

type TextInputProps = {
  size: number; // aantal textboxes dat getoond moet worden
};

export default function TextInput({ size }: TextInputProps) {
  const [values, setValues] = useState<string[]>(() =>
    Array.from({ length: size }, () => "")
  );

  useEffect(() => {
    setValues((prev) =>
      Array.from({ length: size }, (_, i) => prev[i] ?? "")
    );
  }, [size]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);

    alert(`Textbox ${index + 1}: ${newValue}`);
  };

  return (
    <div style={{ display: "flex", gap: "8px", width: "100%" }}>
      {values.map((value, i) => (
        <input
          key={i}
          type="text"
          value={value}
          onChange={(e) => handleChange(i, e)}
          style={{
            flex: 1,
            padding: "6px 8px",
            border: "1px solid #999",
            borderRadius: "4px",
          }}
        />
      ))}
    </div>
  );
}
