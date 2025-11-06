import React, { createContext, useContext, useEffect, useState } from "react";

export type TodoItemData = {
  id: number;
  name: string;        // we mappen 'title' -> 'name'
  completed: boolean;
};

type TodoContextValue = {
  todos: TodoItemData[];
  loading: boolean;
  error: string | null;
  addTodo: (name: string) => void;
  toggleCompleted: (id: number, completed: boolean) => void;
  removeTodo: (id: number) => void;
  reload: () => void;
};

const TodoContext = createContext<TodoContextValue | null>(null);

export function useTodos() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("useTodos must be used inside <TodoProvider>");
  return ctx;
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<TodoItemData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      // pak bvb. 10 stuks
      const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const raw: Array<{ id: number; title: string; completed: boolean }> = await res.json();
      setTodos(raw.map(t => ({ id: t.id, name: t.title, completed: t.completed })));
    } catch (e: any) {
      setError(e?.message ?? "Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { void fetchTodos(); }, []);

  const addTodo = (name: string) => {
    const id = Math.max(0, ...todos.map(t => t.id)) + 1; // client-side id
    setTodos(prev => [...prev, { id, name, completed: false }]);
  };

  const toggleCompleted = (id: number, completed: boolean) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed } : t)));
  };

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const value: TodoContextValue = {
    todos,
    loading,
    error,
    addTodo,
    toggleCompleted,
    removeTodo,
    reload: fetchTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
