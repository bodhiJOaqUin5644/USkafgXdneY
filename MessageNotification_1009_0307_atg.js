// 代码生成时间: 2025-10-09 03:07:17
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the shape of the message
const messageShape = PropTypes.shape({
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});

// MessageNotification component
const MessageNotification = ({ messages }) => {
  // State to track whether the notifications should be displayed
  const [showNotifications, setShowNotifications] = useState(true);

  // Convert messages to JSX elements
  const messageElements = messages.map((message) => (
    <div key={message.id} className={`notification ${message.type}`}>
      {message.message}
    </div>
  ));

  // Function to remove a message from the list
  const removeMessage = (id) => {
    setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };

  if (!showNotifications) return null;

  return (
    <div className='message-notification-container'>
      {messageElements}
    </div>
  );
};

// PropTypes for the component
MessageNotification.propTypes = {
  messages: PropTypes.arrayOf(messageShape).isRequired,
};

export default MessageNotification;
