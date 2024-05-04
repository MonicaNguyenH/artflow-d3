import styles from './GoogleButton.module.css';
import { signIn } from "next-auth/react";
import Link from 'next/link';

export default function GoogleButton({GoogleButtonText}) {

    return (
        <div className={styles.socialContainer}>
            <button className={styles.socialButton} onClick={() => signIn()}>
                <img className={styles.googleIcon} src="/images/google-icon.png" alt="Google Logo" width="50" height="50"/>
                {GoogleButtonText}
            </button>
        </div>
    );
}