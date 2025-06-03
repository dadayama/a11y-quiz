type ProgressBarProps = {
  current: number;
  total: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = Math.round((current / total) * 100);

  return (
    <div className='w-full mb-6'>
      <div className='flex justify-between text-sm text-gray-600 mb-1'>
        <span>
          質問 {current} / {total}
        </span>
        <span id='progress'>進捗：{progress}% 完了</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2.5 border border-transparent'>
        <div
          className='bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out border border-transparent'
          style={{ width: `${progress}%` }}
          aria-labelledby='progress'
          aria-valuemin={1}
          aria-valuemax={total}
          aria-valuenow={current}
          role='progressbar'
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
