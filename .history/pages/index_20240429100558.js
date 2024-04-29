import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Form from "@/components/Form";
import Link from "next/link";
//import {SigninButton, SignupButton} from '@/components/Buttons';
import GradientButton from "@/components/GradientButton";
import HeaderArea from "@/components/HeadArea";



export default function Home() {
  return (
    <>
      <HeaderArea title="ArtFlow" description="The drawing prompt app"/>
      <main className={`${styles.main}`}>
        <div>
          <Image className={styles.logoWordmark} src="/images/logo.png" height={72} width={350} />
          <Link href="/signin">
            <GradientButton buttonText="Sign In"/>
          </Link>
          <Link href="/signup">
            <GradientButton buttonText="Sign Up"/>
          </Link>
        </div>
      </main>
    </>
  );
}
