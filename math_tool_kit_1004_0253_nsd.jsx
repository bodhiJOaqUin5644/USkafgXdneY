// 代码生成时间: 2025-10-04 02:53:19
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the types using PropTypes for type checking
const propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// Math operations
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => b !== 0 ? a / b : 'Infinity',
};

const MathToolkit = ({ value, onChange }) => {
  // State to keep track of the current operation
  const [operation, setOperation] = useState('');
  // State to keep track of the current input value
  const [inputValue, setInputValue] = useState('');

  // Handle input value changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle operation selection
  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  // Handle calculation button click
  const handleCalculate = () => {
    const [input1, input2] = inputValue.split(',').map(Number);
    const result = operations[operation](input1, input2);
    onChange(result);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter two numbers separated by comma"
      />
      <select value={operation} onChange={handleOperationChange}>
        <option value="">- Select operation -</option>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      {value && <div>Result: {value}</div>}
    </div>
  );
};

MathToolkit.propTypes = propTypes;

export default MathToolkit;