export type Choice = {
  fieldId: string;
  choiceId: string[];
  label: string;
};

export type QuizContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: [];
  question: string;
  questionType: string[];
  choices: Choice[];
  answer: string[];
  explanation: string;
};

export type QuizContentsResponse = {
  contents: QuizContent[];
};
