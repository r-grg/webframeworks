import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const inc = () => setCount((c) => c + 1);
  const dec = () => setCount((c) => c - 1);

  const color =
    count > 0 ? "var(--green)" : count < 0 ? "var(--red)" : "var(--black)";

  return (
    <div className={styles.row}>
      <button className={styles.btn} onClick={inc}>Omhoog</button>

      <span className={styles.count} style={{ color }}>
        Count: {count}
      </span>

      <button className={styles.btn} onClick={dec}>Omlaag</button>
    </div>
  );
}
