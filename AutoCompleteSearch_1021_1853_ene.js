// 代码生成时间: 2025-10-21 18:53:40
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AutoCompleteSearch.css'; // 假设有一个CSS文件用于样式

const AutoCompleteSearch = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestionList, setSuggestionList] = useState(suggestions);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      // 过滤出包含输入值的搜索建议
      setSuggestionList(suggestions.filter(suggestion => suggestion.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestionList(suggestions);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setSuggestionList(suggestions);
  };

  return (
    <div className="autocomplete-search">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      {suggestionList.map((suggestion, index) => (
        <div
          key={index}
          className="suggestion"
          onClick={() => handleSelectSuggestion(suggestion)}
        >
          {suggestion}
        </div>
      ))}
    </div>
  );
};

AutoCompleteSearch.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AutoCompleteSearch;
