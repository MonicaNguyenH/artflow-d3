import styles from './ThemeCards.module.css'

export default function ThemeCards() {

  return (
    <>
        <div className={styles.parentContainer}>
            <div className={styles.card1}> </div>
            <div className={styles.card2}> </div>
            <div className={styles.card3}> </div>
            <div className={styles.card4}> </div>
        </div>
    </>
  )
}