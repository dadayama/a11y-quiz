import { useState } from 'react';

const AnimationToggleButton = () => {
  const [stopAnimation, setStopAnimation] = useState(false); // useStateでアニメーションの状態を管理
  console.log(stopAnimation);

  const toggleAnimation = () => {
    setStopAnimation(!stopAnimation); // アニメーションの状態を切り替える
    document.documentElement.classList.toggle('stop-animation', !stopAnimation);
  };

  return (
    <button type='button' onClick={toggleAnimation}>
      アニメーション停止/再開
    </button>
  );
};

export default AnimationToggleButton;
