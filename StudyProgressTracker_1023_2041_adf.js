// 代码生成时间: 2025-10-23 20:41:04
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the propTypes for the component
const propTypes = {
  totalModules: PropTypes.number.isRequired,  // Total number of modules to complete
  currentModule: PropTypes.number.isRequired,  // Current module index
};

// Define the default props
const defaultProps = {
  totalModules: 0,
  currentModule: 0,
};

// StudyProgressTracker functional component
const StudyProgressTracker = ({ totalModules, currentModule }) => {
  // State to track the progress percentage
  const [progress, setProgress] = useState(currentModule / totalModules * 100);

  // Function to update progress
  const updateProgress = (newModule) => {
    setProgress(newModule / totalModules * 100);
  };

  // Calculate the progress percentage
  const progressPercentage = Math.floor(progress);

  return (
    <div className="study-progress-tracker">
      <h2>Study Progress</h2>
      <p>Module {currentModule + 1} of {totalModules}</p>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: progressPercentage + '%' }}></div>
      </div>
      <p>{progressPercentage}% Complete</p>
    </div>
  );
};

// Type checking
StudyProgressTracker.propTypes = propTypes;
StudyProgressTracker.defaultProps = defaultProps;

export default StudyProgressTracker;