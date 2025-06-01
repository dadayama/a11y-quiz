import React from 'react';
import { motion } from 'framer-motion';

interface ExplanationProps {
  explanation: string;
  isCorrect: boolean;
}

const Explanation: React.FC<ExplanationProps> = ({ explanation, isCorrect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mt-6 p-4 rounded-lg ${
        isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
      }`}
    >
      <h3 className={`text-lg font-medium mb-2 ${
        isCorrect ? 'text-green-800' : 'text-red-800'
      }`}>
        {isCorrect ? '正解！' : '不正解'}
      </h3>
      <p className="text-gray-700">{explanation}</p>
    </motion.div>
  );
};

export default Explanation;