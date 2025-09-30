// 代码生成时间: 2025-10-01 01:52:21
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 定义组件的PropTypes
const propTypes = {
  nodeInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    publicKey: PropTypes.string.isRequired,
    alias: PropTypes.string,
  }),
  connectNode: PropTypes.func.isRequired,
};

// 定义组件的默认属性
const defaultProps = {
  nodeInfo: null,
};

// 函数组件
const LightningNetworkNode = ({ nodeInfo, connectNode }) => {
  const [isConnected, setIsConnected] = useState(false);

  // 连接节点的函数
  const handleConnect = () => {
    setIsConnected(true);
    connectNode(nodeInfo);
  };

  return (
    <div>
      <h1>闪电网络节点 {nodeInfo ? nodeInfo.alias : ''}</h1>
      <p>ID: {nodeInfo ? nodeInfo.id : ''}</p>
      <p>地址: {nodeInfo ? nodeInfo.address : ''}</p>
      <p>公钥: {nodeInfo ? nodeInfo.publicKey : ''}</p>
      <button onClick={handleConnect}>连接节点</button>
      {isConnected && <p>节点已连接</p>}
    </div>
  );
};

// 设置propTypes和defaultProps
LightningNetworkNode.propTypes = propTypes;
LightningNetworkNode.defaultProps = defaultProps;

export default LightningNetworkNode;
