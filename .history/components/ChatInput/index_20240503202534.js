import React, { useState } from 'react';
import styles from './ChatInput.module.css'
import ChatDots from '../ChatDots';

export default function ChatRoom() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleMessageSend = () => {
    if (message.trim() === '') return;
    setChatHistory([...chatHistory, message]);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend();
    }
  };

  return (
    <div className={styles.messageContainer}>
      <div className={styles.message}>
        <div className={styles.text}>
          <p>It looks like Doberdude alot</p>
        </div>
        <div className={styles.reactionText}>
          <div className={styles.text}>
            <p>Send it to him?</p>
          </div>
          <div className={styles.emojiContainer}>
            <img className={styles.emoji} src="/images/chat/heart-emoji-ios.png" width={11} height={11} alt="heart emoji reaction"/>
          </div>
        </div>
      </div>
      <div className={styles.replyMessage}>
        <div className={styles.replyText}>
          <p>bro i love it the hec</p>
        </div>
        <div className={styles.replyMessage}>
          <div className={styles.replyDots}>
            <ChatDots/>
          </div>
        </div>
      </div>
      <div className={styles.messageContainer}>
        <div className={styles.message}>
          {chatHistory.map((msg, index) => (
              <div className={styles.text} key={index}>{msg}</div>
            ))}
        </div>
      </div>
      <input
        className={styles.input}
        placeholder="Send message..."
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      
      {/**<button onClick={handleMessageSend} className={styles.sendButton}>Send</button>*/}
    </div>
  );
};