import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/CommunityPage.module.css";
import HeaderArea from "@/components/HeadArea";
import ChatDots from "@/components/ChatDots";
import NavBar from "@/components/NavBar";


export default function CommunityPage() {
    
  return (
    <>
      <HeaderArea title="Health Graph" description="Graph related to health benefit received by going to art gallery"/>
      <main className={styles.main}>
        <div className={styles.header}>
            <h1>Messages</h1>
        </div>
        <div className={styles.chatContainer}>
            <Link href="/chat-room">
                <div className={styles.chat} tabIndex={1}>
                    <div className={styles.chatProfile}>
                        <img className={styles.profileImg} src="/images/cat-alexandra.jpeg" width={60} height={60} alt="user profile image"/>
                        <div className={styles.profileDesc}>
                            <h1>Cat Alexandra</h1>
                            <div className={styles.chatDots}>
                                <ChatDots/>
                            </div>
                        </div>
                    </div>
                    <img className={styles.notiIcon} src="/images/chat/notification-off.svg" width={20} height={20} alt="notification off icon"/>
                </div>
            </Link>

            <div className={styles.chat} tabIndex={2}>
                <div className={styles.chatProfile}>
                    <img className={styles.profileImg} src="/images/chat/capybara-img.jpeg" width={60} height={60} alt="user profile image"/>
                    <div className={styles.profileDesc}>
                        <h1>Capibrura Johnson</h1>
                        <div className={styles.text}>
                            <p>Why the dog so big?</p> 
                            <div className={styles.dot}></div>
                            <p>3m</p>
                        </div>
                    </div>
                </div>
                <img className={styles.notiIcon} src="/images/chat/notification-off.svg" width={20} height={20} alt="notification off icon"/>
            </div>

            <div className={styles.chat} tabIndex={3}>
                <div className={styles.chatProfile}>
                    <img className={styles.profileImg} src="/images/chat/seal-img.jpeg" width={60} height={60} alt="user profile image"/>
                    <div className={styles.profileDesc}>
                        <h1>Seal Miller</h1>
                        <div className={styles.text}>
                            <p>Seen 19h ago</p> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.chat} tabIndex={4}>
                <div className={styles.chatProfile}>
                    <img className={styles.profileImg} src="/images/chat/chicken-img.jpeg" width={60} height={60} alt="user profile image"/>
                    <div className={styles.profileDesc}>
                        <h1>Nugget Williams</h1>
                        <div className={styles.text}>
                            <p>Sent Saturday</p> 
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.chat} tabIndex={5}>
                <div className={styles.chatProfile}>
                    <img className={styles.profileImg} src="/images/chat/racoon-img.jpeg" width={60} height={60} alt="user profile image"/>
                    <div className={styles.profileDesc}>
                        <h1>Racoon Chan</h1>
                        <div className={styles.text}>
                            <p>I love it, keep working on it</p> 
                            <div className={styles.dot}></div>
                            <p>1d</p>
                        </div>
                    </div>
                </div>
                <img className={styles.notiIcon} src="/images/chat/notification-off.svg" width={20} height={20} alt="notification off icon"/>
            </div>

            <div className={styles.chat} tabIndex={6}>
                <div className={styles.chatProfile}>
                    <img className={styles.profileImg} src="/images/chat/dog-img.jpeg" width={60} height={60} alt="user profile image"/>
                    <div className={styles.profileDesc}>
                        <h1>Doberdude Brown </h1>
                        <div className={styles.text}>
                            <p>😃 🤡</p> 
                            <div className={styles.dot}></div>
                            <p>1w</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.footer}>
            <NavBar/>
        </div>
      </main>
    </>
  )
}