import styles from "/styles/signin.module.css";
import { SigninForm } from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import HeaderArea from "@/components/HeadArea";
import GradientMesh from "@/components/GradientMesh"
  
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
      <HeaderArea title="Sign In" description="Sign In page"/>
      <div className={styles.auth}>
        <div className={styles.signin}>
          <SigninForm />
        </div>
        {/* <div className={styles.background}>
          <GradientMesh/>
        </div> */}
      </div>
    </>
  )
}