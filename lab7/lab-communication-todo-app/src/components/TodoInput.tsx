import { useState } from "react";

type Props = {
  onAdd: (name: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState("");

  const add = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue("");
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input
        id="todo"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && add()}
        placeholder="Add a task..."
      />
      <button onClick={add}>Add</button>
    </div>
  );
}
