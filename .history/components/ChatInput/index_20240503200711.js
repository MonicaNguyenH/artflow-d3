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

  return (
    <div>
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

        {chatHistory.map((msg, index) => (
          <div className={styles.text} key={index}>{msg}</div>
        ))}
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

      <input
        className={styles.input}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleMessageSend} className={styles.sendButton}>Send</button>
    </div>
  );
};