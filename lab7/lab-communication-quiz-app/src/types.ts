export type RawQuestion = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuizQuestion = {
  id: string;
  type: "multiple" | "boolean";
  question: string;
  options: string[];       // shuffled
  correct: string;         // exact answer
  category: string;
  difficulty: "easy" | "medium" | "hard";
};
