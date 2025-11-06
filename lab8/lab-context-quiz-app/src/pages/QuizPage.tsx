import { useParams } from "react-router-dom";
import QuizApp from "../components/QuizApp";
import { QuizProvider, type Difficulty } from "../context/QuizContext";

// Reads :difficulty from the URL and (re)mounts the provider.
// Using the `key` forces a fresh mount if the URL changes.
export default function QuizPage() {
  const { difficulty } = useParams<{ difficulty: Difficulty }>();
  const diff = (difficulty ?? "easy") as Difficulty;

  return (
    <QuizProvider key={diff} difficulty={diff}>
      <QuizApp />
    </QuizProvider>
  );
}
