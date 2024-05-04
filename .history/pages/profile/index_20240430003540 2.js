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
            <div className={styles.banner}>
                <img className={styles.hamburgerMenu} src="/images/hamburger-menu.svg" alt="hamburger icon"/>
            </div>
            <div className={styles.avatar}>
                <img className={styles.avatar} src="/images/dog-profile-img.jpeg" alt="dog profile image"/>
            </div>
            <div className={styles.profileDesc}>
                <h1 className={styles.userName}>Dog Smith</h1>
                <p className={styles.account}>@dogsmith123</p>
                <p className={styles.bio}>🌟 Creating magic through art and creativity ✨</p>
                <div className={styles.counts}>
                    <div className={`${styles.posts} ${styles.countNum}`}>
                        <h1>10</h1>
                        <p>posts</p>
                    </div>
                    <div className={`${styles.followers} ${styles.countNum}`}>
                        <h1>10</h1>
                        <p>followers</p>
                    </div>
                    <div className={`${styles.following} ${styles.countNum}`}>
                        <h1>12</h1>
                        <p>following</p>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons}>Edit Profile</button>
                    <button className={styles.buttons}>Edit Profile</button>
                </div>
            </div>
        </main>
    </>
  )
}