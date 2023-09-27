import React, { useState } from 'react';
import './InputForm.css';

const InputForm = ({ onMultiply }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`chat-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="chat-history">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? 'user-message' : 'bot-message'}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="left-navbar">
        <h2>Chat History</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <span className={message.isUser ? 'user-message' : 'bot-message'}>
                {message.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-input-container">
        <form onSubmit={handleFormSubmit} className="chat-input">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a number..."
            autoFocus
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default InputForm;
