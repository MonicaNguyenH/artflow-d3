import styles from "./Chips.module.css";
export default function Chips() {
    return (
        <div className={styles.Container}>
        <div className={styles.firstRow}>
            <div className={styles.first}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
            <div className={styles.second}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
            <div className={styles.third}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
         </div>
         <div className={styles.secondRow}>
            <div className={styles.fourth}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
            <div className={styles.fifth}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
            <div className={styles.sixth}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
        </div>
        <div className={styles.thirdRow}>
            <div className={styles.seventh}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
            <div className={styles.eighth}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
            <div className={styles.ninth}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
        </div>
        <div className={styles.fourthRow}>
            <div className={styles.tenth}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
            <div className={styles.eleventh}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
            <div className={styles.twelveth}>
            <button type="button" className={styles.chips}>chip</button>
            </div>
        </div>
        </div>
    )
}