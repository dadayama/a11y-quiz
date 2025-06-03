import AnswerOption from './AnswerOption';
import Explanation from './Explanation';
import { Quiz } from '../types/quiz';
import { useState } from 'react';

type QuestionProps = {
  question: Quiz;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  onNextQuestion: () => void;
  onShowAnswer: () => void;
  progressDescriptionId: string;
  isAnswered: boolean;
};

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  onShowAnswer,
  isAnswered,
}) => {
  const isCorrect =
    isAnswered &&
    selectedAnswer !== null &&
    question.correctAnswer.includes(String(selectedAnswer + 1));
  const handleShowAnswer = () => {
    if (selectedAnswer === null) {
      setErrorMessage('選択肢を選んでください');
    } else {
      setErrorMessage('');
      onShowAnswer();
    }
  };
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div key={question.id} className='w-full'>
      <h2
        id={`question-${question.id}`}
        className='text-sm md:text-2xl font-semibold text-gray-800 mb-6'
      >
        {question.question}
      </h2>

      <div role='radiogroup' aria-labelledby={`question-${question.id}`}>
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option.label}
            index={index}
            selectedAnswer={selectedAnswer}
            correctAnswer={isAnswered ? question.correctAnswer : null}
            isAnswered={isAnswered}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>

      <div aria-live='polite' className='sr-only' id='explanation-live'>
        {isAnswered
          ? (isCorrect ? '正解！' : '不正解') + ' ' + question.explanation
          : ''}
      </div>

      <div className='mt-6 flex justify-end space-x-3'>
        {!isAnswered && (
          <button
            onClick={handleShowAnswer}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='答えを見る'
          >
            答えを見る
          </button>
        )}
      </div>
      <p
        id='error-message'
        role='alert'
        aria-live='polite'
        className='text-red-600 text-md font-semibold text-right mt-3'
      >
        {errorMessage}
      </p>

      {isAnswered && (
        <>
          <Explanation
            explanation={question.explanation}
            isCorrect={isCorrect}
          />

          <div className='mt-6 flex justify-end'>
            <button
              onClick={onNextQuestion}
              className='px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-white'
              aria-label='次の質問へ'
            >
              次の質問へ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
