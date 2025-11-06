// import React from "react";
import { useTodos } from "../context/TodoContext";

type Props = {
  id: number;
  name: string;
  completed: boolean;
};

export default function TodoItem({ id, name, completed }: Props) {
  const { toggleCompleted, removeTodo } = useTodos();

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleCompleted(id, e.target.checked)}
      />
      <span style={{ textDecoration: completed ? "line-through" : "none", flex: 1 }}>
        {name}
      </span>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
}
