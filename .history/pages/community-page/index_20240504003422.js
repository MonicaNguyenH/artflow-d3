import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/CommunityPage.module.css";
import HeaderArea from "@/components/HeadArea";
import ChatDots from "@/components/ChatDots";


export default function CommunityPage() {
    
  return (
    <>
      <HeaderArea title="Health Graph" description="Graph related to health benefit received by going to art gallery"/>
      <main className={styles.main}>
        <div className={styles.header}>
            <h1>Messages</h1>
        </div>
        <div className={styles.chatContainer}>
            <div className={styles.chat}>
                <img className={styles.profileImg} src="/images/cat-alexandra.jpeg" width={60} height={60} alt="user profile image"/>
                <div className={styles.profileDesc}>
                    <h1>Cat Alexandra</h1>
                    <div className={styles.chatDots}>
                        <ChatDots/>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}