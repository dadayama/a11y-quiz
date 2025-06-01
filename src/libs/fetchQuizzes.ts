import { QuizContentsResponse } from '@/types/quiz';
import { client } from './microcmsClient';

export const fetchQuizzes = async (): Promise<QuizContentsResponse> => {
  const data = await client.get({
    endpoint: 'quizzes',
  });
  return data;
};
