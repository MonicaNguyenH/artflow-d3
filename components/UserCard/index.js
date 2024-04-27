import styles from './UserCard.module.css';
import Link from 'next/link';

export default function UserCard() {
  return (
    <>
        <div className={styles.cardContainer}>
           <h1>Hello, Dog!</h1> 
           <p>0 Entries</p>
           <p>0 Day Streak</p>
           <Link href="/quiz-intro">
            <button className={styles.triviaButton}>Art Trivia</button>
           </Link>
        </div>
    </>
  )
}