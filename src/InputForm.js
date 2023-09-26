import React, { useState } from 'react';
import './InputForm.css';

const InputForm = ({ onMultiply }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      // Add user message
      setMessages([...messages, { text: input, isUser: true }]);
      // Calculate and add bot message
      const result = onMultiply(input);
      setMessages([...messages, { text: result, isUser: false }]);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? 'user-message' : 'bot-message'}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Send a message ...."
          autoFocus
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default InputForm;
