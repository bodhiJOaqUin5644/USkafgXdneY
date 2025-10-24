// 代码生成时间: 2025-10-24 16:58:25
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// 使用TypeScript时，可以替换PropTypes
// import PropTypes from 'prop-types';
// import { FunctionComponent } from 'react';
// type props = {
//   url: string;
//   method: 'GET' | 'POST' | 'PUT' | 'DELETE';
//   data?: any;
//   headers?: any;
// };

const HttpRequestHandler = ({ url, method, data, headers }) => {
  // State管理
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 发起HTTP请求
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios({
          method,
          url,
          data,
          headers,
        });
        setResponse(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, method, data, headers]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!response) return <div>No data available</div>;

  return (
    <div>
      <h1>Response Data:</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

// 使用PropTypes进行属性类型检查
HttpRequestHandler.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']).isRequired,
  data: PropTypes.any,
  headers: PropTypes.any,
};

// 使用TypeScript时，可以定义默认props
// HttpRequestHandler.defaultProps = {
//   method: 'GET',
//   data: null,
//   headers: null,
// };

export default HttpRequestHandler;
