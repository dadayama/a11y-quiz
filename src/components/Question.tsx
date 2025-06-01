import { useRef, useEffect, useState } from 'react';
import AnswerOption from './AnswerOption';
import Explanation from './Explanation';
import { Quiz } from '../types/quiz';

type QuestionProps = {
  question: Quiz;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  onNextQuestion: () => void;
  onShowAnswer: () => void; // 追加
  progressDescriptionId: string;
  isAnswered: boolean;
};

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
  onShowAnswer, // 受け取る
  progressDescriptionId,
  isAnswered,
}) => {
  const questionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.focus();
    }
  }, [question]);

  const isCorrect =
    isAnswered &&
    selectedAnswer !== null &&
    question.correctAnswer.includes(String(selectedAnswer + 1));

  return (
    <div key={question.id} className='w-full'>
      <h2
        ref={questionRef}
        id={`question-${question.id}`}
        className='text-xl md:text-2xl font-semibold text-gray-800 mb-6'
        tabIndex={-1}
        aria-describedby={progressDescriptionId}
      >
        {question.question}
      </h2>

      <ul>
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
      </ul>

      <div aria-live='polite' className='sr-only' id='explanation-live'>
        {isAnswered
          ? (isCorrect ? '正解！' : '不正解') + ' ' + question.explanation
          : ''}
      </div>

      <div className='mt-6 flex justify-end space-x-3'>
        {!isAnswered ? (
          <button
            onClick={onShowAnswer} // ここで親の関数呼ぶ
            disabled={selectedAnswer === null}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='答えを見る'
          >
            答えを見る
          </button>
        ) : (
          <button
            onClick={onNextQuestion}
            className='px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
            aria-label='次の質問へ'
          >
            次の質問へ
          </button>
        )}
      </div>

      {isAnswered && (
        <Explanation explanation={question.explanation} isCorrect={isCorrect} />
      )}
    </div>
  );
};

export default Question;
