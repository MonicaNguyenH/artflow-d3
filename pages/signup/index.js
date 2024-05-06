import styles from "/styles/signin.module.css";
import { SignupForm } from "@/components/Form";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import HeaderArea from "@/components/HeadArea";
import GradientMesh from "@/components/GradientMesh";

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
      <HeaderArea title="Sign Up" description="Sign Up page"/>
      <div className={styles.auth}>
        <div className={styles.signin}>
          <SignupForm />
        </div>
        <div className={styles.background}>
          <GradientMesh/>
        </div>
      </div>
    </>
  )
}