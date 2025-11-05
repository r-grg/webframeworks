// import React from "react";

export interface TodoItemData {
  name: string;
  completed: boolean;
}

type Props = {
  item: TodoItemData;
  index: number;
  onToggle: (index: number, completed: boolean) => void;
};

export default function TodoItem({ item, index, onToggle }: Props) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(e) => onToggle(index, e.target.checked)}
      />
      <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
        {item.name}
      </span>
    </div>
  );
}
