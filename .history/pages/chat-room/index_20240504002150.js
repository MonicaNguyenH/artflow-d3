import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/ChatRoom.module.css";
import HeaderArea from "@/components/HeadArea";
import ChatRoom from "@/components/ChatInput";
import ComProject from "@/components/ComProject";


export default function ChatRoom() {
    
  return (
    <>
      <HeaderArea title="Health Graph" description="Graph related to health benefit received by going to art gallery"/>
      <main className={styles.main}>
        <div>
            <div className={styles.header}>
                <img className={styles.returnIcon} tabIndex={1} src="/images/return-icon.svg" width={23} height={30} alt="return icon"/>
                <div className={styles.profile} tabIndex={2}> 
                    <img className={styles.profileImg} src="/images/cat-alexandra.jpeg" width={30} height={30} alt="user profile image"/>
                    <h1 className={styles.profileName}>Cat Alexandra</h1>
                </div>
                <img className={styles.hamburgerIcon} tabIndex={3} src="/images/hamburger-menu.svg" width={33} height={22} alt="hamburger icon"/>
            </div>
            <div className={styles.chatContainer}>
                <p className={styles.date}>Feb 26 1:38 AM</p>
                <div className={styles.projectContainer}>
                    <ComProject/>
                </div>
                <div className={styles.text}>
                    <ChatRoom/>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
