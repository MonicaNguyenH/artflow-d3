import styles from './Text.module.css';
import Link from 'next/link';

export function textB() {
    return (
        <div className={styles.gradientContainer}>
            <button type='button' className={styles.gradientButton}>hello</button>
        </div>
    );
}