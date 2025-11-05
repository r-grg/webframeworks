import { useState } from "react";
import Question from "./Question";
import styles from "./SimpleQuiz.module.css";

const data = [
  {
    question: "What is the answer to life, the universe and everything?",
    options: ["42", "The answer", "God"],
    correctAnswer: "42",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: 'Which programming language is known for the motto "write once, run anywhere"?',
    options: ["Java", "Python", "C++"],
    correctAnswer: "Java",
  },
  {
    question: "Which animal is the largest mammal on Earth?",
    options: ["Blue Whale", "Elephant", "Giraffe"],
    correctAnswer: "Blue Whale",
  },
];

export default function SimpleQuiz() {
  const [finished, setFinished] = useState(false);

  return (
    <div>
      <h1>Simple Quiz</h1>

      {data.map((q, i) => (
        <Question
          key={i}
          question={q.question}
          options={q.options}
          correctAnswer={q.correctAnswer}
          finished={finished}
        />
      ))}

      <button
        className={styles.finishBtn}
        onClick={() => setFinished(true)}
        disabled={finished}
      >
        Finish
      </button>
    </div>
  );
}
