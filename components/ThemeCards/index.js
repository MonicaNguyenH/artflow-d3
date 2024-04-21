import styles from './ThemeCards.module.css';

export default function ThemeCards() {
  return (
    <>
        <div className={styles.parentContainer}>
            <div className={styles.card1}>
                <p className={styles.cardTitle}>Magical Creatures</p>
            </div>
            <div className={styles.card2}>
                <p className={styles.cardTitle}>Fairytale Escape</p>
            </div>
            <div className={styles.card3}>
                <p className={styles.cardTitle}>Celestial Symphony</p>
            </div>
            <div className={styles.card4}>
                <p className={styles.cardTitle}>Enchanted Forest</p>
            </div>
        </div>
    </>
  )
}