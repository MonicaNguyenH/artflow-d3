import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/ChatRoom.module.css";
import HeaderArea from "@/components/HeadArea";
import ChatRoom from "@/components/ChatInput";


export default function HealthGraph() {
    
  return (
    <>
      <HeaderArea title="Health Graph" description="Graph related to health benefit received by going to art gallery"/>
      <main className={styles.main}>
        <div>
            <div className={styles.header}>
                <img className={styles.returnIcon} src="/images/return-icon.svg" alt="return icon"/>
                <div>
                    <img className={styles.profileImg} src="/images/cat-alexandra.jpeg" alt="user profile image"/>
                    <h1 className={styles.profileName}>Cat Alexandra</h1>
                </div>
                <img className={styles.hamburgerIcon} src="/images/hamburger-menu.svg" alt="hamburger icon"/>
            </div>
        </div>
        <ChatRoom/>
      </main>
    </>
  );
}
