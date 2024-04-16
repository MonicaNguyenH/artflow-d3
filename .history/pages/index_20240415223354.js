import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Form from "@/components/Form";
import Link from "next/link";
import {SigninButton, SignupButton} from '@/components/Buttons';
import GradientButton from "@/components/GradientButton";



export default function Home() {
  return (
    <>
      <Head>
        <title>ArtFlow</title>
        <meta name="description" content="The drawing prompt app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
        <div>
          <Image className={styles.logoWordmark} src="/images/logo.png" height={72} width={350} />
          <Link href="/signin">
            <SigninButton />
          </Link>
          <Link href="/signup">
            <SignupButton />
          </Link>
          <div>
            <GradientButton/>
          </div>
        </div>
      </main>
    </>
  );
}
