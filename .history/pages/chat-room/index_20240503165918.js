/*import { sendMessageToGPT } from "@/services/openaiService";

const ChatRoom = () => {
    
};
*/

// ChatRoom.js
import React, { useState } from 'react';
import { sendMessageToGPT } from '../../services/openaiService';

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      // Add user's message to the chat
      setMessages((prevMessages) => [...prevMessages, { text: inputValue, user: 'user' }]);
      
      // Send user's message to OpenAI's API and get response
      const response = await sendMessageToGPT(inputValue);

      // Add OpenAI's response to the chat
      setMessages((prevMessages) => [...prevMessages, { text: response, user: 'bot' }]);
      
      // Clear input field
      setInputValue('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.user === 'user' ? (
              <span>User: {message.text}</span>
            ) : (
              <span>Bot: {message.text}</span>
            )}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};
