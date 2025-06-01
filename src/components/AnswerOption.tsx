import React from 'react';

interface AnswerOptionProps {
  option: string;
  index: number;
  selectedAnswer: number | null;
  correctAnswer: number | null;
  isAnswered: boolean;
  onSelect: (index: number) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({
  option,
  index,
  selectedAnswer,
  correctAnswer,
  isAnswered,
  onSelect,
}) => {
  const isSelected = selectedAnswer === index;
  const isCorrect = isAnswered && correctAnswer === index;
  const isIncorrect = isAnswered && isSelected && !isCorrect;

  const getOptionClass = () => {
    let baseClass =
      'relative w-full p-4 mb-3 border-2 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-purple-400';

    if (isSelected) {
      baseClass += ' border-purple-600';
    } else {
      baseClass += ' border-gray-200 hover:border-purple-300';
    }

    if (isAnswered) {
      if (isCorrect) {
        baseClass = baseClass.replace('border-purple-600', '');
        baseClass += ' bg-green-100 border-green-500 text-green-800';
      } else if (isIncorrect) {
        baseClass = baseClass.replace('border-purple-600', '');
        baseClass += ' bg-red-100 border-red-500 text-red-800';
      }

      if (correctAnswer === index && !isSelected) {
        baseClass += ' bg-green-50 border-green-500 border-dashed';
      }

      baseClass = baseClass.replace('cursor-pointer', 'cursor-default');
      baseClass = baseClass.replace('hover:scale-[1.01]', '');
      baseClass = baseClass.replace('hover:border-purple-300', '');
    }

    return baseClass;
  };

  return (
    <li>
      <button
        type='button'
        className={getOptionClass()}
        onClick={() => !isAnswered && onSelect(index)}
        disabled={isAnswered}
        aria-pressed={isSelected} // これはアクセシビリティ的に選択状態を示すのに使えるよ
      >
        <div className='flex items-start'>
          <div className='flex items-center justify-center h-6 w-6 rounded-full border-2 border-gray-300 text-sm font-medium mr-3 mt-0.5'>
            {String.fromCharCode(65 + index)}
          </div>
          <div className='flex-1 pr-8 text-left'>{option}</div>
          {isAnswered && (
            <div className='absolute right-3 flex items-center justify-center'>
              {isCorrect && <span className='text-green-600 text-xl'>○</span>}
              {isIncorrect && <span className='text-red-600 text-xl'>×</span>}
            </div>
          )}
        </div>
      </button>
    </li>
  );
};

export default AnswerOption;
