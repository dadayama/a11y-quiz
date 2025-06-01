import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  descriptionId?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  descriptionId,
}) => {
  const progress = Math.round((current / total) * 100);

  return (
    <div className='w-full mb-6'>
      <div
        className='flex justify-between text-sm text-gray-600 mb-1'
        id={descriptionId}
      >
        <span>
          質問 {current} / {total}
        </span>
        <span>{progress}% 完了</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2.5'>
        <div
          className='bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
