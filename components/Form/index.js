import styles from "./Form.module.css";
import Link from "next/link";
export default function Form() {
    return (
        <div className={styles.form}>
        <h2>Sign In</h2>
        <p className={styles.instructions}>Please enter you email address and password below</p>
        <form className={styles.fill}>
        <div className={styles.First}>
            <label htmlFor="email" className={styles.name}>Email</label>
            <input type="text" id="Email" className={styles.email}/>
        </div>
        <div className={styles.pass}>
            <label htmlFor="password" className={styles.name}>Password</label>
            <input type="text" id="Password" className={styles.password}/>
        </div>
            <button type="submit" className={styles.submit}>Sign In</button>
            <p className={styles.noAccount}>Don't have an account? <Link href="/signin"> Sign Up</Link></p>
            <button type="submit" className={styles.google}>Sign In with Google</button>
            <button type="submit" className={styles.apple}>Sign In with Apple</button>
        </form>
    </div>
    )
}