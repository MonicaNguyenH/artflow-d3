import styles from "@/styles/Quiz.module.css";
import Link from "next/link";
import Image from "next/image";

export default function quizIntro() {
  return (
    <div className={`${styles.quiz} ${styles.quizIntro}`}>
      <nav className={`${styles.quizNav} ${styles.quizIntroNav}`}>
        <Image src='/images/quiz/close-button.png' alt="close button" height={60} width={60} />
      </nav>
      <h1>
        Level Up Your Artistry with <span className={styles.artflow}>Artflow</span>
      </h1>
      <p>Get ready to brush up on your art knowledge with Art Trivia Fun! </p>
      <p>Explore famous artists, iconic paintings, and unexpected facts in a quiz that celebrates creativity. </p>
      <Link href={'/quiz-question-1'}>
        <button className={styles.startQuiz}>
          Start Quiz
        </button>
      </Link>
    </div>
  )
}