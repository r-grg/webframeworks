import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";
import type { QuizQuestion } from "../types";

type Props = {
  q: QuizQuestion;
  selected: string | null;   // user's current answer
  locked: boolean;           // after answering, cannot change
  onAnswer: (id: string, answer: string) => void;
};

export default function Question({ q, selected, locked, onAnswer }: Props) {
  return q.type === "multiple" ? (
    <MultipleChoiceQuestion
      question={q.question}
      options={q.options}
      selected={selected}
      correct={q.correct}
      locked={locked}
      onSelect={(a) => onAnswer(q.id, a)}
    />
  ) : (
    <TrueFalseQuestion
      question={q.question}
      selected={selected}
      correct={q.correct}
      locked={locked}
      onSelect={(a) => onAnswer(q.id, a)}
    />
  );
}
