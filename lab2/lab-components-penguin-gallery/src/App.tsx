import penguins from "./penguins.json";
import type { Penguin } from "./types";

import styles from "./App.module.css";
import PenguinCard from "./components/PenguinCard";


export default function App() {
  const all: Penguin[] = penguins;
  const females = all.filter(p => p.gender === "Female");

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Penguin Gallery — Females</h1>
      <section className={styles.grid}>
        {females.map(p => (
          <PenguinCard key={p.id} penguin={p} />
        ))}
      </section>
    </main>
  );
}
