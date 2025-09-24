// 代码生成时间: 2025-09-24 08:28:14
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// TypeScript类型定义（如果使用TypeScript，可用下面这个类型替代PropTypes）

// interface FormValidatorProps {
//   onValidate: (isValid: boolean) => void;
//   children: React.ReactNode;
// }

// 使用PropTypes进行类型检查
const FormValidatorComponent = ({ onValidate, children }) => {

  const [formData, setFormData] = useState({});
  const [isValid, setIsValid] = useState(true);

  // 实现表单验证逻辑
  const validateForm = () => {
    let newIsValid = true;
    for (let key in formData) {
      if (!formData[key]) {
        newIsValid = false;
        break;
      }
    }
    setIsValid(newIsValid);
    onValidate(newIsValid);
  };

  // 处理表单输入变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      {children(
        formData,
        handleInputChange,
        validateForm,
        isValid,
      )}
    </div>
  );
};

FormValidatorComponent.propTypes = {
  onValidate: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default FormValidatorComponent;
