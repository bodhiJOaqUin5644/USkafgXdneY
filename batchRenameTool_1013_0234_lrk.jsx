// 代码生成时间: 2025-10-13 02:34:19
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的Prop类型
const propTypes = {
  files: PropTypes.arrayOf(PropTypes.string).isRequired,  // 文件名数组
  renamePrefix: PropTypes.string,  // 重命名前缀
  renameSuffix: PropTypes.string,  // 重命名后缀
};

// 定义组件的默认属性
const defaultProps = {
  renamePrefix: '',
  renameSuffix: '',
};

// 批量文件重命名组件
const BatchRenameTool = ({ files, renamePrefix, renameSuffix }) => {
  // 状态管理：重命名后的文件名数组
  const [renamedFiles, setRenamedFiles] = useState(files.map(file => \