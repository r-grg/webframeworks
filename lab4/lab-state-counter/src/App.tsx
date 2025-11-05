import Counter from "./components/Counter";
import styles from "./App.module.css";

export default function App() {
  return (
    <main className={styles.page}>
      <h1>lab-state-counter</h1>

      <div className={styles.stack}>
        <Counter />
        <Counter />
        <Counter />
      </div>
    </main>
  );
}
