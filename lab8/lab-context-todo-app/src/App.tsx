// import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <TodoProvider>
      <main
        style={{
          minHeight: "100vh",
          width: "100vw",
          display: "grid",
          placeItems: "center",
          background: "#f8fafc",
          padding: 24,
          color: "#334155",
        }}
      >
        <div style={{ display: "grid", gap: 12, width: 520 }}>
          <h1>lab-context-todo-app</h1>
          <TodoInput />
          <TodoList />
        </div>
      </main>
    </TodoProvider>
  );
}
