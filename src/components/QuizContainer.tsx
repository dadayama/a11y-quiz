import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Question from './Question';
import ProgressBar from './ProgressBar';
import ResultScreen from './ResultScreen';
import { QuizQuestion, QuizState } from '../types/quiz';

interface QuizContainerProps {
  questions: QuizQuestion[];
}

const QuizContainer: React.FC<QuizContainerProps> = ({ questions }) => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    isAnswered: false,
    score: 0,
    isCompleted: false
  });
  
  const currentQuestion = questions[quizState.currentQuestionIndex];
  
  const handleSelectAnswer = (index: number) => {
    if (quizState.isAnswered) return;
    
    const isCorrect = index === currentQuestion.correctAnswer;
    
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: index,
      isAnswered: true,
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };
  
  const handleNextQuestion = () => {
    const nextIndex = quizState.currentQuestionIndex + 1;
    
    if (nextIndex >= questions.length) {
      setQuizState(prev => ({
        ...prev,
        isCompleted: true
      }));
      return;
    }
    
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: nextIndex,
      selectedAnswer: null,
      isAnswered: false
    }));
  };
  
  const handleRestartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      isAnswered: false,
      score: 0,
      isCompleted: false
    });
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      {!quizState.isCompleted ? (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <ProgressBar 
            current={quizState.currentQuestionIndex + 1} 
            total={questions.length} 
          />
          
          <AnimatePresence mode="wait">
            <Question
              key={currentQuestion.id}
              question={currentQuestion}
              selectedAnswer={quizState.selectedAnswer}
              isAnswered={quizState.isAnswered}
              onSelectAnswer={handleSelectAnswer}
              onNextQuestion={handleNextQuestion}
            />
          </AnimatePresence>
        </div>
      ) : (
        <ResultScreen 
          score={quizState.score}
          totalQuestions={questions.length}
          onRestart={handleRestartQuiz}
        />
      )}
    </div>
  );
};

export default QuizContainer;