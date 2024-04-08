import styles from './Buttons.module.css';

export default function Buttons() {
    return(
        <>
        <div className={styles.gradientContainer}>
            <button className={styles.gradientButton}>Sign In</button>
        </div>

        <div className={styles.gradientContainer}>
            <button className={styles.gradientButton}>Sign Up</button>
        </div>
        <div className={styles.ContinueButton}>
            <button className={styles.gradientContinueButton}>Continue</button>
        </div>
        <div className={styles.socialContainer}>
            <button className={styles.socialButton}>
                <img  className={styles.socialIcon} src="/images/google-icon.png" alt="Google Logo" width="25" height="25"/>
                Sign In with Google
            </button>
        </div>
        <div className={styles.socialContainer}>
            <button className={styles.socialButton}>
                <img className={styles.socialIcon} src="/images/apple-icon.png" alt="Apple Logo" width="25" height="25"/>
                Sign In with Apple
            </button>
        </div>
        </>
    )
    
}