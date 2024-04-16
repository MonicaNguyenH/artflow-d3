import styles from './Text.module.css';
import Link from 'next/link';

export function textB({text}) {
    return (
        <div className={styles.gradientContainer}>
            <button type='button' className={styles.gradientButton}>{text}</button>
        </div>
    );
}