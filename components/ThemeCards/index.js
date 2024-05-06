import styles from './ThemeCards.module.css';
import Link from 'next/link';

export default function ThemeCards() {
  return (
    <>
        <p className={styles.title}>Trending Challenges</p>
        <div className={styles.parentContainer}>
            <div className={styles.card1}>
                <p className={styles.cardTitle}>Fairytale Escape</p>
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.card2}>
                <p className={styles.cardTitle}>Magical Creatures</p>
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.card3}>
                <Link href="/celestial-symphony">
                    <p className={styles.cardTitle}>Celestial Symphony</p>
                    <div className={styles.overlay}></div>             
                </Link>
            </div>
            <div className={styles.card4}>
                <p className={styles.cardTitle}>Enchanted Forest</p>
                <div className={styles.overlay}></div>
            </div>
        </div>
    </>
  )
}
