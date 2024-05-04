import styles from "@/styles/QuizIntro.module.css";
import Link from "next/link";
import Image from "next/image";
import HeaderArea from "@/components/HeadArea";

export default function quizIntro() {

  return (
    <>
      <HeaderArea title="Quiz Intro" description="Quiz intro"/>
      <div className={`${styles.quiz} ${styles.quizIntro}`}>
        <nav className={`${styles.quizNav} ${styles.quizIntroNav}`}>
          <Link href="/home-page">
            <button className={styles.closeButton}>
              <Image className={`${styles.quizNavIcon}`} src='/images/quiz/close-button.png' alt="close button" height={30} width={30} tabIndex={1}/>
            </button>
          </Link>
        </nav>
        <div className={`${styles.quizHeading}`}>
          <h2 className={`${styles.quizHeadingH1}`}>
            LEVEL UP <br/>YOUR <br/>
            <span className={`${styles.quizHeadingArtistry}`}>ARTISTRY</span>
            <br/>
            WITH 
            <div className={`${styles.logo}`}>
              <span className={styles.artflow}>
                <Image className={styles.logoWordmark} src='/images/logo.svg' alt="logo wordmark" height={79} width={450} />
              </span>
            </div>
          </h2>
        </div>
        <div className={`${styles.quizParagraph}`}>
          <p className={`${styles.quizParagraphText}`}>Get ready to brush up on your art knowledge with Art Trivia Fun! </p>
          <p className={`${styles.quizParagraphText}`}>Explore famous artists, iconic paintings, and unexpected facts in a quiz that celebrates creativity. </p>
        </div>
        <Link className={`${styles.quizStartButton}`} href={'/quiz-question-1'}>
          <button className={styles.startQuiz} tabIndex={2}>
            Start Quiz
          </button>
        </Link>
      </div>
    </>
  )
}