import AnswerOption from './AnswerOption';
import Explanation from './Explanation';
import { Quiz } from '../types/quiz';

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
  progressDescriptionId,
  isAnswered,
}) => {
  const isCorrect =
    isAnswered &&
    selectedAnswer !== null &&
    question.correctAnswer.includes(String(selectedAnswer + 1));

  return (
    <div key={question.id} className='w-full'>
      <h2
        id={`question-${question.id}`}
        className='text-sm md:text-2xl font-semibold text-gray-800 mb-6'
        aria-describedby={progressDescriptionId}
        tabIndex={0}
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
        {!isAnswered && (
          <button
            onClick={onShowAnswer}
            disabled={selectedAnswer === null}
            className='px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='答えを見る'
          >
            答えを見る
          </button>
        )}
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
