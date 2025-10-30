// 代码生成时间: 2025-10-30 13:41:43
// AutoGraderComponent.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的Props类型
const propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

// 定义组件的Props类型接口，使用TypeScript的话可以使用interface关键字

const AutoGraderComponent = ({ answers, correctAnswers, onChange }) => {
  // 使用useState hook进行状态管理
  const [submission, setSubmission] = useState(answers);
  const [score, setScore] = useState(0);

  // 检查答案是否正确
  const checkAnswer = (answer, correctAnswer) => {
    return answer === correctAnswer;
  };

  // 计算总分
  const calculateScore = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (checkAnswer(answer, correctAnswers[index])) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  // 提交答案
  const submitAnswers = () => {
    calculateScore();
    onChange(score);
  };

  // 渲染答案输入框
  const renderAnswerInputs = () => {
    return answers.map((answer, index) => (
      <div key={index}>
        <input
          type="text"
          value={submission[index]}
          onChange={(e) => setSubmission([...submission.slice(0, index), e.target.value, ...submission.slice(index + 1)])}
        />
      </div>
    ));
  };

  return (
    <div>
      <h1>Auto Grading Tool</h1>
      {renderAnswerInputs()}
      <button onClick={submitAnswers}>Submit Answers</button>
      <p>Score: {score}</p>
    </div>
  );
};

// 设置默认Props和PropTypes
AutoGraderComponent.propTypes = propTypes;

export default AutoGraderComponent;