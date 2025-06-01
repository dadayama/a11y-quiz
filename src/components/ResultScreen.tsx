import { motion } from 'framer-motion';

type ResultScreenProps = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedbackMessage = () => {
    if (percentage >= 90) {
      return '素晴らしい！あなたはアクセシビリティのエキスパートです！';
    } else if (percentage >= 70) {
      return 'よくできました！アクセシビリティの原則をしっかり理解しています。';
    } else if (percentage >= 50) {
      return 'がんばりました！これからもWebアクセシビリティについて学び続けましょう。';
    } else {
      return 'クイズに挑戦してくれてありがとう！アクセシビリティガイドラインを復習して、知識を深めましょう。';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='w-full max-w-2xl mx-auto text-center'
    >
      <div className='bg-white rounded-2xl shadow-xl p-8 md:p-10'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>クイズ完了！</h2>

        <div className='mb-8'>
          <div className='relative inline-block'>
            <svg className='w-40 h-40' viewBox='0 0 100 100'>
              <circle
                className='text-gray-200'
                strokeWidth='8'
                stroke='currentColor'
                fill='transparent'
                r='44'
                cx='50'
                cy='50'
              />
              <circle
                className='text-purple-600'
                strokeWidth='8'
                stroke='currentColor'
                fill='transparent'
                r='44'
                cx='50'
                cy='50'
                strokeDasharray={`${2 * Math.PI * 44}`}
                strokeDashoffset={`${
                  2 * Math.PI * 44 * (1 - percentage / 100)
                }`}
                strokeLinecap='round'
                transform='rotate(-90 50 50)'
              />
            </svg>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <span className='text-4xl font-bold text-gray-800'>
                {percentage}%
              </span>
            </div>
          </div>
        </div>

        <div className='mb-6'>
          <p className='text-xl font-medium text-gray-700'>
            あなたのスコア: {score}/{totalQuestions}
          </p>
          <p className='text-lg text-gray-600 mt-2'>{getFeedbackMessage()}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          className='px-8 py-3 bg-purple-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50'
        >
          もう一度挑戦する
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ResultScreen;
