import React, { useState } from 'react';
import stles from './ChatInput.module.css'

export default function ChatRoom() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleMessageSend = () => {
    if (message.trim() === '') return;
    setChatHistory([...chatHistory, message]);
    setMessage('');
  };

  return (
    <div>
      <div>
        {chatHistory.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
};