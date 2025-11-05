import { useId, useState } from "react";
import styles from "./SimpleQuiz.module.css";

type QuestionProps = {
  question: string;
  options: string[];
  correctAnswer: string;
  finished: boolean;
};

export default function Question({ question, options, correctAnswer, finished }: QuestionProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const name = useId(); // zelfde name voor radios binnen deze vraag

  return (
    <fieldset className={styles.block}>
      <legend className={styles.legend}>{question}</legend>

      {options.map((opt, idx) => {
        const id = `${name}-${idx}`;
        const isCorrect = finished && opt === correctAnswer;

        return (
          <div key={id} className={`${styles.option} ${isCorrect ? styles.correct : ""}`}>
            <input
              id={id}
              type="radio"
              name={name}
              value={opt}
              checked={selected === opt}
              onChange={(e) => setSelected(e.target.value)}
              disabled={finished}
            />
            <label htmlFor={id}>{opt}</label>
          </div>
        );
      })}
    </fieldset>
  );
}
