import type { Penguin } from "../types";
import styles from "./PenguinCard.module.css";

type Props = { penguin: Penguin };

export default function PenguinCard({ penguin }: Props) {
  return (
    <article className={styles.card} aria-label={`${penguin.nickname} card`}>
      <div className={styles.imgWrap}>
        <img
          src={penguin.image}
          alt={`${penguin.nickname} (${penguin.island})`}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{penguin.nickname}</h3>
        <p className={styles.meta}>
          {penguin.gender} • species #{penguin.species_id} • {penguin.year}
        </p>
        <p className={styles.desc}>{penguin.description}</p>
      </div>
    </article>
  );
}
