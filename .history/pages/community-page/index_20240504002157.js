import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/CommunityPage.module.css";
import HeaderArea from "@/components/HeadArea";


export default function CommunityPage() {
    
  return (
    <>
      <HeaderArea title="Health Graph" description="Graph related to health benefit received by going to art gallery"/>
      <main className={styles.main}></main>
    </>
  )
}