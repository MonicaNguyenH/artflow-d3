import styles from './Buttons.module.css';
import { signIn } from "next-auth/react";
import Link from 'next/link';

export function GoogleSigninButton() {

    return (
        <div className={styles.socialContainer}>
            <button className={styles.socialButton} onClick={() => signIn()}>
                <img className={styles.googleIcon} src="/images/google-icon.png" alt="Google Logo" width="50" height="50"/>
                Sign in with Google
            </button>
        </div>
    );
}