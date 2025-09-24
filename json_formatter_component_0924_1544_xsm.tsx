// 代码生成时间: 2025-09-24 15:44:37
import React, { useState } from 'react';
import PropTypes from 'prop-types';
# 改进用户体验

// Define the type for the JSON data
interface JsonData {
  [key: string]: any;
}

// Define the props interface with PropTypes
# 添加错误处理
const propTypes = {
  initialValue: PropTypes.string.isRequired,
};

// Function component with state management
const JsonFormatterComponent: React.FC<PropTypes.InferProps<typeof propTypes>> = ({ initialValue }) => {
  const [jsonData, setJsonData] = useState<JsonData>({});
# 扩展功能模块
  const [formattedJson, setFormattedJson] = useState<string>(initialValue);

  // Function to update JSON data
  const updateJsonData = (key: string, value: any) => {
# 扩展功能模块
    setJsonData((prevData) => ({
      ...prevData,
# 增强安全性
      [key]: value,
# 改进用户体验
    }));
  };

  // Function to format JSON data
  const formatJson = () => {
    setFormattedJson(JSON.stringify(jsonData, null, 2));
  };

  return (
    <div>
      <h1>JSON Data Formatter</h1>
      <textarea
        value={formattedJson}
        onChange={(e) => {
          try {
            const parsed = JSON.parse(e.target.value);
            setJsonData(parsed);
          } catch (error) {
            console.error('Invalid JSON:', error);
          }
        }}