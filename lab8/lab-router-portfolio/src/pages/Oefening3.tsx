import { createContext, useContext, useEffect, useState } from "react";
type Todo = { id: number; name: string; completed: boolean };

type Ctx = {
  todos: Todo[];
  loading: boolean;
  addTodo: (name: string) => void;
  toggle: (id: number, done: boolean) => void;
  remove: (id: number) => void;
  reload: () => void;
};
const TodoCtx = createContext<Ctx | null>(null);
const useTodos = () => {
  const v = useContext(TodoCtx);
  if (!v) throw new Error("useTodos outside provider");
  return v;
};

function Provider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const reload = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=8");
    const data: Array<{ id:number; title:string; completed:boolean }> = await res.json();
    setTodos(data.map(d => ({ id:d.id, name:d.title, completed:d.completed })));
    setLoading(false);
  };
  useEffect(() => { void reload(); }, []);

  const addTodo = (name: string) =>
    setTodos(prev => [...prev, { id: Math.max(0,...prev.map(t=>t.id))+1, name, completed:false }]);
  const toggle = (id: number, done: boolean) =>
    setTodos(prev => prev.map(t => t.id===id ? { ...t, completed: done } : t));
  const remove = (id: number) =>
    setTodos(prev => prev.filter(t => t.id !== id));

  return (
    <TodoCtx.Provider value={{ todos, loading, addTodo, toggle, remove, reload }}>
      {children}
    </TodoCtx.Provider>
  );
}

function TodoInput() {
  const { addTodo, reload } = useTodos();
  const [val, setVal] = useState("");
  const add = () => { const v = val.trim(); if (!v) return; addTodo(v); setVal(""); };
  return (
    <div style={{ display:"flex", gap:8 }}>
      <input value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>e.key==="Enter"&&add()} placeholder="Add a task..." />
      <button onClick={add}>Add</button>
      <button onClick={reload}>Reload</button>
    </div>
  );
}

function TodoList() {
  const { todos, loading, toggle, remove } = useTodos();
  if (loading) return <p>Loading…</p>;
  return (
    <div style={{ display:"grid", gap:8 }}>
      {todos.map(t => (
        <div key={t.id} style={{ display:"flex", gap:8, alignItems:"center" }}>
          <input type="checkbox" checked={t.completed} onChange={e=>toggle(t.id, e.target.checked)} />
          <span style={{ flex:1, textDecoration:t.completed ? "line-through" : "none" }}>{t.name}</span>
          <button onClick={()=>remove(t.id)}>Delete</button>
        </div>
      ))}
      {todos.length===0 && <p>No todos.</p>}
    </div>
  );
}

export default function Oefening3() {
  return (
    <Provider>
      <h2>Todo (Context)</h2>
      <TodoInput />
      <TodoList />
    </Provider>
  );
}
