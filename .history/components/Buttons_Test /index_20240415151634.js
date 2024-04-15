import styles from './Buttons.module.css';
import Link from 'next/link';

export function SigninButton() {
    return (
        <div className={styles.gradientContainer}>
            <button type='button' className={styles.gradientButton}>{text}</button>
        </div>
    );
}

