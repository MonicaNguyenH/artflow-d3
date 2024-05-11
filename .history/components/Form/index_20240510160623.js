import styles from "./Form.module.css";
import Link from "next/link";
//import { SigninButton, SignupButton, GoogleSigninButton, AppleSigninButton } from "../Buttons";
import GradientButton from "../GradientButton";
import GoogleButton from "../GoogleButton";
import AppleButton from "../AppleButton";
import GradientMesh from "../GradientMesh";

export function SigninForm() {
    return (
        <div className={styles.form}>
        <h2>Sign in</h2>
        <p className={styles.instructions}>Enter your email address and password</p>
        <form className={styles.fill}>
            <div className={styles.fields}>
                <div className={styles.input}>
                    <label htmlFor="email" className={styles.name}>Email</label>
                    <input tabIndex={1} placeholder="example@mail.com" type="email" id="email" className={styles.email}/>
                </div>
                <div className={styles.input}>
                    <label htmlFor="password" className={styles.name}>Password</label>
                    <input tabIndex={2} type="password" id="password" placeholder="Enter your password" className={styles.password}/>
                </div>
            </div>
            <Link href="/quiz-intro" tabIndex={3}>
                <GradientButton buttonText="Sign In"/>
            </Link>
            <p className={styles.noAccount}>Don't have an account? <Link href="/signup" tabIndex={4}> Sign up</Link></p>
            <GoogleButton tabIndex={5} GoogleButtonText="Sign in with Google" />
            <AppleButton tabIndex={6} AppleButtonText="Sign in with Apple" />
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
                            <input tabIndex={1} placeholder="Dog Smith" type="text" id="name" className={styles.email}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="email" className={styles.name}>Email</label>
                            <input tabIndex={2} placeholder="example@mail.com" type="email" id="email" className={styles.email}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="password" className={styles.name}>Password</label>
                            <input tabIndex={3} type="password" id="password" placeholder="Enter your password" className={styles.password}/>
                        </div>
                    </div>
                    <Link href="/quiz-intro" tabIndex={4}>
                        <GradientButton buttonText="Sign Up"/>
                    </Link>
                    <p className={styles.noAccount}>Already have an account? <Link href="/signin" tabIndex={5}> Sign in</Link></p>
                    <GoogleButton tabIndex={6} GoogleButtonText="Sign up with Google" />
                    <AppleButton tabIndex={7} AppleButtonText="Sign up with Apple" />
                </form>
                {/* <div className={styles.background}>
                    <GradientMesh/>
                </div> */}

         </div>
    )
}