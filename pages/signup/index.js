import styles from "/styles/SignIn.module.css";
import { SignupForm } from "@/components/Form"

export default function SignUp() {
  return (
    <>
      <div className={styles.auth}>
        <div className={styles.signin}>
          <SignupForm />
        </div>
      </div>
    </>
  )
}