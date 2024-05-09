import styles from './AppleButton.module.css';
import Link from 'next/link';

export default function AppleButton({AppleButtonText}) {
    return (
        <div className={styles.socialContainer}>
            <button type="button" className={styles.socialButton}>
                <img className={styles.appleIcon} src="/images/apple-icon.png" alt="Apple Logo" width="50" height="50"/>
                {AppleButtonText}
            </button>
        </div>
    );
}