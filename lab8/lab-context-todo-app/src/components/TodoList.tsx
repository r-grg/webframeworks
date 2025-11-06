// import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, loading, error } = useTodos();

  if (loading) return <p style={{ color: "#64748b" }}>Loading…</p>;
  if (error) return <p style={{ color: "#dc2626" }}>Error: {error}</p>;

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {todos.map((t) => (
        <TodoItem key={t.id} id={t.id} name={t.name} completed={t.completed} />
      ))}
      {todos.length === 0 && <p style={{ color: "#64748b" }}>No todos yet.</p>}
    </div>
  );
}
