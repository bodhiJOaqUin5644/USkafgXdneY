// 代码生成时间: 2025-10-14 03:12:18
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 使用TypeScript时的类型定义
// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
//   children: React.ReactNode;
// }

// 函数组件
const ModalDialogComponent = ({ isOpen, onClose, title, children }) => {
  // 状态管理
  const [isModalOpen, setModalOpen] = useState(isOpen);

  // 处理关闭模态框
  const handleClose = () => {
    setModalOpen(false);
    onClose();
  };

  // 点击外部区域关闭模态框
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleBackdropClick}>
      <div style={{ background: 'white', padding: '20px', border: '1px solid #ccc', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} onClick={(event) => event.stopPropagation()}>
        <h2>{title}</h2>
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

// 属性验证
ModalDialogComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ModalDialogComponent;