import styles from './Buttons.module.css';
import { signIn } from "next-auth/react";
import Link from 'next/link';

export default function SigninButton() {
    return (
        <div className={styles.gradientContainer}>
            <button type='button' className={styles.gradientButton}>Sign In</button>
        </div>
    );
}

export function SignupButton() {
    return (
        <div className={styles.gradientContainer}>
            <button className={styles.gradientButton}>Sign Up</button>
        </div>
    );
}

export function ContinueButton() {
    return (
        <div className={styles.ContinueButton}>
            <button className={styles.gradientContinueButton}>Continue</button>
        </div>
    );
}

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

export function AppleSigninButton() {
    return (
        <div className={styles.socialContainer}>
            <button className={styles.socialButton}>
                <img className={styles.appleIcon} src="/images/apple-icon.png" alt="Apple Logo" width="50" height="50"/>
                Sign in with Apple
            </button>
        </div>
    );
}
