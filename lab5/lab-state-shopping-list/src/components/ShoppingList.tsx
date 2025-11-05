import { useState } from "react";
import styles from "./ShoppingList.module.css";

type Item = { id: number; name: string; quantity: number };

export default function ShoppingList() {
  const [shoppingList, setShoppingList] = useState<Item[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [message, setMessage] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  const resetMsg = () => setMessage(null);

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    resetMsg();

    const trimmed = name.trim();
    if (!trimmed) {
      setMessage({ kind: "err", text: "Please provide a name." });
      return;
    }
    if (!Number.isFinite(quantity) || quantity <= 0) {
      setMessage({ kind: "err", text: "Quantity must be a positive number." });
      return;
    }

    const newItem: Item = { id: Date.now(), name: trimmed, quantity };
    setShoppingList((prev) => [...prev, newItem]);
    setMessage({ kind: "ok", text: `"${trimmed}" (x${quantity}) added to the list.` });

    // clear inputs
    setName("");
    setQuantity(0);
  };

  const removeItem = (id: number) => {
    const item = shoppingList.find((i) => i.id === id);
    setShoppingList((prev) => prev.filter((i) => i.id !== id));
    if (item) setMessage({ kind: "ok", text: `"${item.name}" removed from the list.` });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={addItem}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          className={styles.input}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={resetMsg}
        />

        <label htmlFor="qty">Quantity:</label>
        <input
          id="qty"
          className={styles.number}
          type="number"
          min={0}
          step={1}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value || "0", 10))}
          onFocus={resetMsg}
        />

        <div className={styles.actions}>
          <button className={styles.btn} type="submit">Add</button>
        </div>
      </form>

      {message && (
        <div className={`${styles.msg} ${message.kind === "ok" ? styles.ok : styles.err}`}>
          {message.text}
        </div>
      )}

      <table className={styles.table} aria-label="Shopping list">
        <thead>
          <tr>
            <th style={{ width: "60%" }}>Name</th>
            <th>Quantity</th>
            <th style={{ width: 100 }}></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ textAlign: "center", color: "#64748b" }}>
                No items yet.
              </td>
            </tr>
          ) : (
            shoppingList.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <button className={styles.btn} onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
