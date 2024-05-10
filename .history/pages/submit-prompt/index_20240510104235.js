import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/SubmitPrompt.module.css";
import Link from "next/link";
import HeaderArea from "@/components/HeadArea";

export default function SubmitPrompt() {

  const [submittedDrawing, setSubmittedDrawing] = useState();
  const [promptTitle, setPromptTitle] = useState('');
  useEffect(() => { 
    const localStorageDrawing = localStorage.getItem('Drawing');
    console.log(localStorageDrawing);
    setSubmittedDrawing(localStorageDrawing);
  }, [])

  useEffect(() => {
    console.log(localStorage.getItem('Prompt'));
    const prompt = localStorage.getItem('Prompt').trim().split('%');
    console.log(prompt);
    console.log(prompt[0]);
    setPromptTitle(prompt[0])
  }, [])

  const handleSaveDrawing = () => {
    const downloadImage = document.createElement("a");
    downloadImage.href = submittedDrawing;
    downloadImage.download = "ArtFlow-Export";
    downloadImage.click();
  }

  return (
    
    <main className={styles.main}>
      <HeaderArea title="Submit Prompt" description="Submit Prompt page"/>
      <nav className={styles.nav}>
        <div className={styles.downloadButton}>
          <button tabIndex={1} onClick={handleSaveDrawing}>
            <Image src="/images/download-white.png" width={100} height={100} alt="save icon" />
          </button>
        </div>
        <div className={styles.title}>{promptTitle}</div>
        <div className={styles.closeButton}>
          <Link href="/drawing-page">
            <button tabIndex={1}>
              <Image src='/images/closebtn.png' alt="close button" height={60} width={60}/>
            </button>
          </Link>
        </div>
      </nav>
      <div className={styles.content}>
        <div class={styles.drawingContainer}>
          <Image alt="user drawing" src={submittedDrawing} height={600} width={600} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.profileBtn}>
          <Link href={'/profile'}>
            <button>
              Upload to profile
            </button>
          </Link>
        </div>
        <div className={styles.messageContainer}>
          <h6>Send in message</h6>
          <div className={styles.contactsContainer}>
            <div className={styles.contactItem}>
              <Image src="/images/allcontacts.png" width={100} height={100} alt="all contacts"></Image>
              <p>All</p>
            </div>
            <div className={styles.contactItem}>
              <Link href="/chat-room">
                <Image src="/images/cat.png" width={100} height={100} alt="user contact"></Image>
              </Link>
              <p style={{margin: "14px 0 15px 0"}}>Cat</p>
            </div>
            <div className={styles.contactItem}>
              <Image src="/images/capi.png" width={100} height={100} alt="user contact"></Image>
              <p>Capi...</p>
            </div>
            <div className={styles.contactItem}>
              <Image src="/images/seal.png" width={100} height={100} alt="user contact"></Image>
              <p>Seal</p>
            </div>
            <div className={styles.contactItem}>
              <Image src="/images/nugget.png" width={100} height={100} alt="user contact"></Image>
              <p>Nugget</p>
            </div>
            <div className={styles.contactItem}>
              <Image src="/images/racoon.jpeg" width={100} height={100} alt="user contact"></Image>
              <p>Raco...</p>
            </div>
            <div className={styles.contactItem}>
              <Image src="/images/dobe.jpeg" width={100} height={100} alt="user contact"></Image>
              <p>Dobe...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}