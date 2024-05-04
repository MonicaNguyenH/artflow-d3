import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Profile.module.css"
import NavBar from "@/components/NavBar";
import HeaderArea from "@/components/HeadArea";
import ProfileTab from "@/components/ProfileTab";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession();
  return (
    <>
        <header>
            <HeaderArea title="Prompt Page" description="Prompt description page"/>
        </header>
        <main className={`${styles.main}`}>
            <div className={styles.banner}>
                <img className={styles.hamburgerMenu} src="/images/hamburger-menu.svg" alt="hamburger icon"/>
                <div className={styles.avatar}>                    
                    <img className={styles.avatar} src={session?.user.image ? session?.user.image : "/images/dog-profile-img.jpeg"} alt="profile image"/>
                </div>
            </div>            
            <div className={styles.profileDesc}>
                <h1 className={styles.userName}>{session?.user.name ? session?.user.name : "Dog Smith"}</h1> 
                <p className={styles.account}>@{session?.user.email ? session?.user.email.split('@')[0] : "dogsmith123"}</p>
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
                    <button className={styles.button}>Edit Profile</button>
                    <button className={styles.button}>Add Friends</button>
                </div>
                <div className={styles.tab}>
                    <ProfileTab/>
                </div>
                <div className={styles.footer}>
                    <NavBar/>
                </div>
            </div>
        </main>
    </>
  )
}