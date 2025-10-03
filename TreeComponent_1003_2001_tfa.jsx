// 代码生成时间: 2025-10-03 20:01:31
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define a type for TreeNode
type TreeNode = {
  id: string,
  label: string,
  children?: TreeNode[],
};

// Define a type for Tree
type TreeProps = {
  data: TreeNode[],
};
# TODO: 优化性能

const TreeComponent = ({ data }: TreeProps) => {
  // State to manage the expanded state of each node
# 添加错误处理
  const [expanded, setExpanded] = useState<TreeNode[]>(data.map(node => ({ ...node, expanded: false })));

  // Toggle the expanded state of a node
  const toggleNode = (nodeId) => {
    setExpanded(prevExpanded =>
      prevExpanded.map(node => {
        if (node.id === nodeId) {
# FIXME: 处理边界情况
          return { ...node, expanded: !node.expanded };
        }
        return node;
      })
    );
  };

  return (
# NOTE: 重要实现细节
    <ul>
      {expanded.map(node => (
        <li key={node.id}>
          <span onClick={() => toggleNode(node.id)}>{node.label}</span>
          {node.expanded && node.children && (
            <TreeComponent data={node.children} />
          )}
        </li>
      ))}
    </ul>
  );
};
# 改进用户体验

// Prop validation
# 改进用户体验
TreeComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      children: PropTypes.array,
    }),
  ).isRequired,
};

export default TreeComponent;