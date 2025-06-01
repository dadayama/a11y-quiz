// カテゴリーの型
type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

// 選択肢の型
type Option = {
  fieldId: string;
  label: string;
};

// クイズの型
export type Quiz = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: Category[];
  question: string;
  options: Option[];
  correctAnswer: string[];
  explanation: string;
};

// microCMSのレスポンス型（複数クイズ取得用）
export type QuizResponse = {
  contents: Quiz[];
  totalCount: number;
  offset: number;
  limit: number;
};
