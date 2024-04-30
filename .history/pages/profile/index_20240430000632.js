import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Profile.module.css"
import NavBar from "@/components/NavBar";
import Link from "next/link";
import HeaderArea from "@/components/HeadArea";

export default function Home() {
  
  return (
    <>
        <header>
            <HeaderArea title="Prompt Page" description="Prompt desceription page"/>
        </header>
        <main className={`${styles.main}`}>
            
        </main>
    </>
  )
}