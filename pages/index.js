import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Form from "@/components/Form";
import Link from "next/link";
import GradientButton from "@/components/GradientButton";
import HeaderArea from "@/components/HeadArea";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
// import lottie from 'lottie-web';
import GradientMesh from "@/components/GradientMesh";
import GradientMeshTwo from "@/components/GradientMeshTwo";
import dynamic from "next/dynamic";

export default function Home() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    import('lottie-web').then((lottie) => {
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      loop: true,
      rerender: "svg",
      autoplay: true,
      path: '/lottie/artflow_logo_lottie 2.json' 
    });

    return () => anim.destroy();
  });
  }, []);

  const { data: session } = useSession()
  const [signedOut, setSignedOut] = useState(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    // Convert searchParams to an object
    const params = Object.fromEntries(searchParams);
    // Setting the state to have the object that carried over from the last page(s)
    console.log(params.signOut);
    if(params.signOut){
      localStorage.setItem('Drawing', '');
      if(session) {
        signOut();
      }
    }
  }, [searchParams]);

  return (
    <>
      <HeaderArea title="ArtFlow" description="The drawing prompt app"/>
      <main className={`${styles.main}`}>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <div className={styles.logoContainer}>
              <lottie className={styles.logo} ref={lottieContainer}></lottie> 
              <Image className={styles.logoWordmark} src="/lottie/ArtFlow.svg" alt="logo wordmark" height={72} width={350} />
            </div>
            <Link href="/signin">
              <GradientButton buttonText="Sign In"/>
            </Link>
            <Link href="/signup">
              <GradientButton buttonText="Sign Up"/>
            </Link>
          </div>

          <div className={styles.background}>
            <GradientMesh/>
          </div>
        </div>
      </main>
    </>
  );
}