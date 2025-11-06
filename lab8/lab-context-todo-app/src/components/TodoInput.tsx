import  { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoInput() {
  const { addTodo, reload } = useTodos();
  const [value, setValue] = useState("");

  const add = () => {
    const v = value.trim();
    if (!v) return;
    addTodo(v);
    setValue("");
  };

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && add()}
        placeholder="Add a task…"
      />
      <button onClick={add}>Add</button>
      <button onClick={reload} title="Reload from API">Reload</button>
    </div>
  );
}
