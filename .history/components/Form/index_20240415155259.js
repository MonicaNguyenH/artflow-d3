import styles from "./Form.module.css";
import Link from "next/link";
import { SigninButton, SignupButton, GoogleSigninButton, AppleSigninButton } from "../Buttons";
import { textB } from "../textB";


export function SigninForm() {
    return (
        <div className={styles.form}>
        <h2>Sign in</h2>
        <p className={styles.instructions}>Please enter you email address and password</p>
        <form className={styles.fill}>
            <div className={styles.fields}>
                <div className={styles.input}>
                    <label htmlFor="email" className={styles.name}>Email</label>
                    <input placeholder="example@mail.com" type="email" id="email" className={styles.email}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="password" className={styles.name}>Password</label>
                    <input type="password" id="password" placeholder="Enter your password" className={styles.password}/>
                </div>
            </div>
            <Link href="/quiz-intro">
                {/**<SigninButton /> */}
            </Link>
            <p className={styles.noAccount}>Don't have an account? <Link href="/signup"> Sign up</Link></p>
            <GoogleSigninButton />
            <AppleSigninButton />
        </form>
    </div>
    )
}

export function SignupForm() {
    return (
        <div className={styles.form}>
        <h2>Sign up</h2>
        <p className={styles.instructions}>Create your account</p>
        <form className={styles.fill}>
            <div className={styles.fields}>
                <div className={styles.input}>
                    <label htmlFor="name" className={styles.name}>Name</label>
                    <input placeholder="Dog Smith" type="text" id="name" className={styles.email}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="email" className={styles.name}>Email</label>
                    <input placeholder="example@mail.com" type="email" id="email" className={styles.email}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="password" className={styles.name}>Password</label>
                    <input type="password" id="password" placeholder="Enter your password" className={styles.password}/>
                </div>
            </div>
            <Link href="/quiz-intro">
                <SignupButton />
            </Link>
            <p className={styles.noAccount}>Already have an account? <Link href="/signin"> Sign in</Link></p>
            <GoogleSigninButton />
            <AppleSigninButton />
        </form>
    </div>
    )
}