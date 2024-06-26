import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/PromptPage.module.css"
import PromptDesc from "@/components/PromptDesc";
import ChipsX from "@/components/ChipsX";
import NavBar from "@/components/NavBar";
import { useState,useEffect } from "react";
import Link from "next/link";

export default function Home() {

  const [drawingPrompt, setDrawingPrompt] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem('Prompt'));
    const prompt = localStorage.getItem('Prompt').trim().split('%');
    console.log(prompt);
    setDrawingPrompt(prompt);
  }, [])
  
  return (
    <>
      <Head>
        <title>Prompt Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.header}>
          <ChipsX />
        </div>

        <div className={styles.promptCardBG}>
          <div className={styles.Shape1}>
              <svg width="161" height="159" viewBox="0 0 161 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-0.749191 102.26C-31.6999 69.4683 12.147 25.5936 37.9392 7.75524C122.635 -36.6508 172.826 147.805 158.187 168.3C143.548 188.795 73.4908 199.043 88.1297 168.3C102.769 137.558 37.9392 143.251 -0.749191 102.26Z"
                  fill="#910BEA" fillOpacity="1"/>
               </svg> 
          </div>
          <div className={styles.Shape2}>
              <svg width="201" height="183" viewBox="0 0 201 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M74.3147 93.0652C90.7619 56.7933 32.2177 30.8546 0.889648 22.4193C0.889648 3.86157 30.9123 -0.0749133 45.9237 0.276559C65.5037 15.0384 108.384 43.2967 123.265 38.2355C141.866 31.9091 192.774 62.4871 198.648 74.0857C204.522 85.6843 196.69 133.133 176.131 167.929C155.572 202.725 65.5037 166.874 56.6927 161.602C47.8817 156.33 53.7557 138.405 74.3147 93.0652Z"
                 fill="#F94E9B" fillOpacity="1"/>
              </svg> 
          </div>
          <div className={styles.Shape3}>
            <svg width="280" height="229" viewBox="0 0 280 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M286.596 117.861C300.048 85.694 270.155 10.102 165.527 -5.98145C143.107 -1.15642 100.658 10.7453 110.224 19.752C122.181 31.0104 217.841 150.028 211.862 156.461C205.884 162.894 7.09076 156.461 1.11203 175.761C-4.8667 195.061 113.213 252.961 189.442 248.136C265.671 243.311 273.144 150.028 286.596 117.861Z"
                fill="#4A10D1" fillOpacity="1"/>
             </svg> 
          </div>
          <div className={styles.Shape4}>
              <svg width="284" height="229" viewBox="0 0 284 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M300.232 111.279C314.328 77.5732 283.004 -1.63438 173.372 -18.4871C149.88 -13.4313 105.4 -0.960276 115.424 8.47722C127.953 20.2741 228.188 144.984 221.924 151.725C215.659 158.466 7.35787 151.725 1.09319 171.948C-5.1715 192.171 118.556 252.841 198.431 247.785C278.306 242.729 286.137 144.984 300.232 111.279Z"
                fill="#4A10D1" fillOpacity="0.7"/>
              </svg> 
          </div>
          <div className={styles.Shape5}>
              <svg width="210" height="192" viewBox="0 0 210 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M77.558 97.2589C94.7919 59.2521 33.4475 32.0728 0.621094 23.234C0.621094 3.78868 32.0798 -0.336084 47.8091 0.0321992C68.3256 15.5001 113.257 45.11 128.849 39.8068C148.34 33.1777 201.683 65.2183 207.838 77.3716C213.993 89.5249 205.786 139.243 184.244 175.703C162.702 212.163 68.3256 174.598 59.0932 169.074C49.8607 163.55 56.0157 144.767 77.558 97.2589Z"
                fill="#F94E9B" fillOpacity="0.7"/>
              </svg> 
          </div>
          <div className={styles.Shape6}>
              <svg width="160" height="167" viewBox="0 0 160 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-10.0223 106.281C-42.4534 71.9204 3.49071 25.9472 30.5166 7.25569C119.264 -39.2743 171.855 154.004 156.516 175.479C141.177 196.955 67.7686 207.693 83.1076 175.479C98.4467 143.266 30.5166 149.232 -10.0223 106.281Z"
                  fill="#910BEA" fillOpacity="1"/>
               </svg> 
          </div>
          <div className={styles.promptCard}>
            <p className={styles.quotation1}>“</p>
            <p className={styles.prompt}>{drawingPrompt[1]}</p>
            <p className={styles.quotation2}>”</p>
          </div>
        </div>
        <div>
          <PromptDesc title={drawingPrompt[0]} description={drawingPrompt[2]}/>
        </div>
        <div className={styles.regenerateButtonContainer}>
          <Link href="/new-prompt">
            <button className={styles.regenerateButton}>Regenerate</button>
          </Link>
        </div>

        <div className={styles.footer}>
          <NavBar/>
        </div>
      </main>
    </>
  );
}
