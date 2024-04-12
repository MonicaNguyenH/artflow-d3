import styles from "/styles/signin.module.css";
import { SigninForm } from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

export default function SignIn() {
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
          <SigninForm />
        </div>
      </div>
    </>
  )
}