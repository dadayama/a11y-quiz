import { MutableRefObject } from 'react';

type AnswerOptionProps = {
  option: string;
  index: number;
  selectedAnswer: number | null;
  correctAnswer: string[] | null;
  isAnswered: boolean;
  onSelect: (index: number) => void;
};

const AnswerOption: React.FC<AnswerOptionProps> = ({
  option,
  index,
  selectedAnswer,
  correctAnswer,
  isAnswered,
  onSelect,
}) => {
  const isSelected = selectedAnswer === index;

  const isCorrect = isAnswered && correctAnswer?.includes(String(index + 1));
  const isIncorrect = isAnswered && isSelected && !isCorrect;

  const getOptionClass = () => {
    let baseClass =
      'relative w-full p-4 mb-3 border-2 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:transition-none';

    if (isSelected) {
      baseClass += ' border-purple-600 bg-purple-100';
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

      if (correctAnswer?.includes(String(index + 1)) && !isSelected) {
        baseClass += ' bg-green-50 border-green-500 border-dashed';
      }

      baseClass = baseClass.replace('cursor-pointer', 'cursor-default');
      baseClass = baseClass.replace('hover:scale-[1.01]', '');
      baseClass = baseClass.replace('hover:border-purple-300', '');
    }

    return baseClass;
  };

  return (
    <label
      className={
        getOptionClass() +
        ' flex items-center gap-3 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:transition-none'
      }
      htmlFor={`option-${index}`}
    >
      <input
        type='radio'
        id={`option-${index}`}
        name='quiz'
        disabled={isAnswered}
        checked={isSelected}
        onChange={() => {
          if (!isAnswered) onSelect(index);
        }}
        className='
      radio-input
      flex-shrink-0
      h-6 w-6
      rounded-full
      border-2
      border-gray-400
      dark:border-gray-600
      bg-transparent
      checked:border-purple-600
      checked:bg-white
      checked:relative
    '
      />
      {option}

      {isAnswered && (
        <div className='absolute right-3 flex items-center justify-center'>
          {isCorrect && <span className='text-green-600 text-xl'>○</span>}
          {isIncorrect && <span className='text-red-600 text-xl'>×</span>}
        </div>
      )}
    </label>
  );
};

export default AnswerOption;
