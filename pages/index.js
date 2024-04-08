import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Form from "@/components/Form";
import Chips from "@/components/Chips";


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
      </main>
    </>
  );
}
