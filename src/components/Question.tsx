import React, { useRef, useEffect } from 'react';
import AnswerOption from './AnswerOption';
import Explanation from './Explanation';
import { QuizQuestion } from '../types/quiz';

interface QuestionProps {
  question: QuizQuestion;
  selectedAnswer: number | null;
  isAnswered: boolean;
  onSelectAnswer: (index: number) => void;
  onNextQuestion: () => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  isAnswered,
  onSelectAnswer,
  onNextQuestion,
  progressDescriptionId,
}) => {
  const isCorrect = isAnswered && selectedAnswer === question.correctAnswer;

  const questionRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.focus();
    }
  }, [question]);

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
            option={option}
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

      {isAnswered && (
        <>
          <Explanation
            explanation={question.explanation}
            isCorrect={isCorrect}
          />

          <div className='mt-6 flex justify-end'>
            <button
              onClick={onNextQuestion}
              className='px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
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
