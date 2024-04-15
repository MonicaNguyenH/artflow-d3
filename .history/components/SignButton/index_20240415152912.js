import styles from './SignButton.module.css';
import { signIn } from "next-auth/react";
import Link from 'next/link';

export function SignButton({text}) {
    return (
        <div className={styles.gradientContainer}>
            <button type='button' className={styles.gradientButton}>{text}</button>
        </div>
    );
}