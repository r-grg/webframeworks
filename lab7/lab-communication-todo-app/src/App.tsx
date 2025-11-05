import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { TodoItemData } from "./components/TodoItem";

export default function App() {
  // 👉 State van de todos blijft in App (parent)
  const [todos, setTodos] = useState<TodoItemData[]>([]);

  const addTodo = (name: string) => {
    setTodos((prev) => [...prev, { name, completed: false }]);
  };

  const markCompleted = (index: number, completed: boolean) => {
    setTodos((prev) =>
      prev.map((t, i) => (i === index ? { ...t, completed } : t))
    );
  };

  return (
    <div style={{ display: "grid", gap: 12, padding: 16, maxWidth: 520 }}>
      <h1>lab-communication-todo-app</h1>

      {/* child → parent via onAdd */}
      <TodoInput onAdd={addTodo} />

      {/* parent → child via props + child → parent via onToggle */}
      <TodoList todos={todos} onToggle={markCompleted} />
    </div>
  );
}
