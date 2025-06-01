import React from 'react';
import { motion } from 'framer-motion';
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
}) => {
  const isCorrect = isAnswered && selectedAnswer === question.correctAnswer;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        {question.question}
      </h2>
      
      <div role="radiogroup" aria-labelledby={`question-${question.id}`}>
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
      </div>
      
      {isAnswered && (
        <>
          <Explanation 
            explanation={question.explanation} 
            isCorrect={isCorrect} 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 flex justify-end"
          >
            <button
              onClick={onNextQuestion}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="次の質問へ"
            >
              次の質問へ
            </button>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Question;