import { useState } from "react";
import styles from "./RandomCat.module.css";

export default function RandomCat() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const handleClick = () => {
    // willekeurige positie (binnen viewport)
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);
    setPosition({ x, y });
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick}>Random Cat</button>

      {position && (
        <img
          src="https://cataas.com/cat?width=200&height=200"
          alt="Random cat"
          className={styles.cat}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        />
      )}
    </div>
  );
}
