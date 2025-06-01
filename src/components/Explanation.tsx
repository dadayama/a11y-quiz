type ExplanationProps = {
  explanation: string;
  isCorrect: boolean;
};

const Explanation: React.FC<ExplanationProps> = ({
  explanation,
  isCorrect,
}) => {
  return (
    <div
      className={`mt-6 p-4 rounded-lg ${
        isCorrect
          ? 'bg-green-50 border border-green-200'
          : 'bg-red-50 border border-red-200'
      }`}
      aria-live='polite'
    >
      <h3
        className={`text-lg font-medium mb-2 ${
          isCorrect ? 'text-green-800' : 'text-red-800'
        }`}
      >
        {isCorrect ? '正解！' : '不正解'}
      </h3>
      <p className='text-gray-700'>{explanation}</p>
    </div>
  );
};

export default Explanation;
