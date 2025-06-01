export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  score: number;
  isCompleted: boolean;
}