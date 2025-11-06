import { useQuiz } from "../context/QuizContext";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TrueFalseQuestion from "./TrueFalseQuestion";

export default function Question({ id }: { id: string }) {
  const { questions, answers, locked, answer } = useQuiz();
  const q = questions.find(q => q.id === id)!;

  return q.type === "multiple" ? (
    <MultipleChoiceQuestion
      question={q.question}
      options={q.options}
      selected={answers[id] ?? null}
      correct={q.correct}
      locked={!!locked[id]}
      onSelect={(val) => answer(id, val)}
    />
  ) : (
    <TrueFalseQuestion
      question={q.question}
      selected={answers[id] ?? null}
      correct={q.correct}
      locked={!!locked[id]}
      onSelect={(val) => answer(id, val)}
    />
  );
}
