import styles from './Buttons.module.css';
import { signIn } from "next-auth/react";
import Link from 'next/link';

export default function AppleSigninButton() {
    return (
        <div className={styles.socialContainer}>
            <button className={styles.socialButton}>
                <img className={styles.appleIcon} src="/images/apple-icon.png" alt="Apple Logo" width="50" height="50"/>
                Sign in with Apple
            </button>
        </div>
    );
}