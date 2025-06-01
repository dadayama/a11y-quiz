import { QuizResponse } from '@/types/quiz';
import { client } from './microcmsClient';

export const fetchQuizzes = async (): Promise<QuizResponse> => {
  const data = await client.get({
    endpoint: 'quizzes',
  });
  return data;
};
