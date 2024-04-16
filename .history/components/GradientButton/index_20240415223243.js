import styles from './GradientButton.module.css';
import Link from 'next/link';

export default function GradientButton() {
    return (
        <div className={styles.gradientContainer}>
            <button type='button' className={styles.gradientButton}>Sign In</button>
        </div>
    );
}