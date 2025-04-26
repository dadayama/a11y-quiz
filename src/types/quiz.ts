export interface Quiz {
  id: number;
  question: string;
  answer: boolean;
  explanation: string;
}

export interface QuizResponse {
  contents: Quiz[];
}
