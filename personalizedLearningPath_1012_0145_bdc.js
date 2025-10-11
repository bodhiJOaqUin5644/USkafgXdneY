// 代码生成时间: 2025-10-12 01:45:25
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes for the component props
const propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
  })).isRequired,
  selectedCourse: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
  }),
  onCourseSelect: PropTypes.func.isRequired,
};

// Using TypeScript, define the type for the component props
// interface IPersonalizedLearningPathProps {
//   courses: { title: string; description: string; duration: number }[];
//   selectedCourse?: { title: string; description: string; duration: number };
//   onCourseSelect: (course: { title: string; description: string; duration: number }) => void;
// }

const PersonalizedLearningPath = ({ courses, selectedCourse, onCourseSelect }) => {
  const [currentCourse, setCurrentCourse] = useState(null);

  // Handle course selection
  const handleCourseClick = (course) => {
    setCurrentCourse(course);
    onCourseSelect(course);
  };

  return (
    <div>
      <h1>Personalized Learning Path</h1>
      {courses.map((course) => (
        <div key={course.title} onClick={() => handleCourseClick(course)}
          style={{ cursor: 'pointer', marginBottom: '10px' }}
        >
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <p>Duration: {course.duration} hours</p>
        </div>
      ))}
      {currentCourse && (
        <div>
          <h3>Selected Course:</h3>
          <p>Title: {currentCourse.title}</p>
          <p>Description: {currentCourse.description}</p>
          <p>Duration: {currentCourse.duration} hours</p>
        </div>
      )}
    </div>
  );
};

// Using TypeScript, define the component
// const PersonalizedLearningPath: React.FC<IPersonalizedLearningPathProps> = (props) => {
//   // ... component implementation remains the same
// };

PersonalizedLearningPath.propTypes = propTypes;

export default PersonalizedLearningPath;