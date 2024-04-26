import styles from './UserCard.module.css';

export default function UserCard() {
  return (
    <>
        <div className={styles.cardContainer}>
           <h1>Hello, Dog!</h1> 
           <p>0 Entries</p>
           <p>0 Day Streak</p>
           <button>Art Trivia</button>
        </div>
    </>
  )
}