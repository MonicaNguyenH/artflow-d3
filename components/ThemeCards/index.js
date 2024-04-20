import styles from './ThemeCards.module.css';

export default function ThemeCards() {
  return (
    <>
        <div className={styles.parentContainer}>
            <div className={styles.card1}>
                <p className={styles.cardTitle}>Challenge</p>
            </div>
            <div className={styles.card2}>
                <p className={styles.cardTitle}>Challenge</p>
            </div>
            <div className={styles.card3}>
                <p className={styles.cardTitle}>Challenge</p>
            </div>
            <div className={styles.card4}>
                <p className={styles.cardTitle}>Challenge</p>
            </div>
        </div>
    </>
  )
}