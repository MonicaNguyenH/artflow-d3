import styles from './GradientButton.module.css';
import Link from 'next/link';

export default function GradientButton({buttonText}) {
    return (
        <div className={styles.gradientContainer}>
            <button type='button' className={styles.gradientButton}>buttonText</button>
        </div>
    );
}