import styles from "/styles/SignIn.module.css";
import { SignupForm } from "@/components/Form";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function SignUp() {
  const { data: session } = useSession()
  console.log(session);
  const router = useRouter();

  if(session) {
    router.push('/quiz-intro');
    return null;
  }
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