import Form from "@/components/Form";
import Link from "next/link";
import styles from "@/styles/signin.module.css";
export default function SignUp() {
    return (
        <main>
        <div className={styles.form}>
        <h2>Sign Up</h2>
        <p className={styles.instructions}>Please enter your name and email address and password below</p>
        <form className={styles.fill}>
        <div className={styles.First}>
            <label htmlFor="name" className={styles.name}>Name</label>
            <input type="text" id="Name" className={styles.fname}/>
        </div>
        <div className={styles.pass}>
            <label htmlFor="email" className={styles.name}>Email</label>
            <input type="text" id="Email" className={styles.email}/>
        </div>
        <div className={styles.pass}>
            <label htmlFor="password" className={styles.name}>Password</label>
            <input type="text" id="Password" className={styles.password}/>
        </div>
            <button type="submit" className={styles.submit}>Create Account</button>
            <p>already have an account? Log In</p>
            <button type="submit" className={styles.google}>Sign In with Google</button>
            <button type="submit" className={styles.apple}>Sign In with Apple</button>
        </form>
    </div>
    </main>

    )
}