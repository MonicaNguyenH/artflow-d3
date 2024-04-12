import styles from "/styles/SignIn.module.css";
import { SigninForm } from "@/components/Form"

export default function SignIn() {
  return (
    <>
      <div className={styles.auth}>
        <div className={styles.signin}>
          <SigninForm />
        </div>
      </div>
    </>
  )
}