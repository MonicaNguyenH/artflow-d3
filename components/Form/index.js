import styles from "./Form.module.css";
import Link from "next/link";
//import { SigninButton, SignupButton, GoogleSigninButton, AppleSigninButton } from "../Buttons";
import GradientButton from "../GradientButton";
import GoogleButton from "../GoogleButton";
import AppleButton from "../AppleButton";


export function SigninForm() {
    return (
        <div className={styles.form}>
        <h2>Sign in</h2>
        <p className={styles.instructions}>Enter your email address and password</p>
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
                <GradientButton buttonText="Sign In"/>
            </Link>
            <p className={styles.noAccount}>Don't have an account? <Link href="/signup"> Sign up</Link></p>
            <GoogleButton GoogleButtonText="Sign in with Google" />
            <AppleButton AppleButtonText="Sign in with Apple" />
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
                <GradientButton buttonText="Sign Up"/>
            </Link>
            <p className={styles.noAccount}>Already have an account? <Link  href="/signin"> Sign in</Link></p>
            <GoogleButton GoogleButtonText="Sign up with Google" />
            <AppleButton AppleButtonText="Sign up with Apple" />
        </form>
    </div>
    )
}