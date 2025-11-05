// import React from "react";
import TodoItem, { type TodoItemData } from "./TodoItem";

type Props = {
  todos: TodoItemData[];
  onToggle: (index: number, completed: boolean) => void;
};

export default function TodoList({ todos, onToggle }: Props) {
  return (
    <div>
      {todos.map((t, i) => (
        <TodoItem key={i} item={t} index={i} onToggle={onToggle} />
      ))}
    </div>
  );
}
