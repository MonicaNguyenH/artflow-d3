import { useSession, signIn, signOut } from "next-auth/react";
import styles from './Test.module.css';
import Image from "next/image";

export default function LoginBtn() {
  const { data: session } = useSession()
  console.log(session);
  if (session) {
    return (
      <>
      <p className={styles.session}>
        Signed in as {session.user.email}
      </p>
      <div className={styles.session}>
      <Image src={session.user.image} height={300} width={300} />
      </div>
         <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}