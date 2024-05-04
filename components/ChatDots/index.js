import styles from './ChatDots.module.css'
import React from 'react';

export default function ChatDots() {
  return (
    <>
        <div className={styles.typingIndicator}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    </>
  ) 
}