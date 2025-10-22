// 代码生成时间: 2025-10-22 13:19:59
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript时，可以替换PropTypes，使用下面的定义：
// interface Props {
//   onScoreChange: (score: number) => void;
//   initialScore?: number;
// }

const CreditScoreModel = ({ onScoreChange, initialScore = 0 }) => {
  // 状态管理，控制信用评分
  const [score, setScore] = useState(initialScore);

  // 处理分数变化的函数
  const handleScoreChange = (newScore) => {
    setScore(newScore);
    onScoreChange(newScore);
  };

  return (
    <div>
      {/* 信用评分显示 */}
      <p>Credit Score: {score}</p>
      {/* 分数调整按钮 */}
      <button onClick={() => handleScoreChange(score - 1)}>Decrease Score</button>
      <button onClick={() => handleScoreChange(score + 1)}>Increase Score</button>
    </div>
  );
};

// PropTypes类型检查
CreditScoreModel.propTypes = {
  onScoreChange: PropTypes.func.isRequired,
  initialScore: PropTypes.number,
};

export default CreditScoreModel;