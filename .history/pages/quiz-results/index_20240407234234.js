import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import answers from '@/data/quiz-answers';
import Image from 'next/image';

import styles from "@/styles/QuizSummary.module.css";

export default function QuizOutro() {

  const searchParams = useSearchParams();
  const [selectedValues, setSelectedValues] = useState({});
  const [score, setScore] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Convert searchParams to an object
    const params = Object.fromEntries(searchParams);
    // Setting the state to have the object that carried over from the last page(s)
    setSelectedValues(params);
  }, [searchParams]);

  useEffect(() => {
    // Calculate score when selectedValues or correctAnswers change
    calculateScore();
  }, [selectedValues, answers]); // Add selectedValues and correctAnswers as dependencies to useEffect

  // Function to calculate score
  const calculateScore = () => {
    let newScore = 0;
    for (const key in selectedValues) {
      // Check if user's answer matches the correct answer for each question
      if (selectedValues[key] === answers[key]) {
        newScore++;
      }
    }
    setScore(newScore);
  };


  return (
    <div className={`${styles.quizResults} ${styles.quiz}`}> 
      <nav className={`${styles.quizNav} ${styles.quizIntroNav}`}>
        <Image src='/images/quiz/close-button.png' alt="close button" height={30} width={30} />
      </nav>
      <div>
        {score == 0 && 
          <div>
            <div className={styles.resultGraph}>
              <Image src='/images/quiz/answer_0.svg' alt="answer_0/5" height={290} width={290} />
            </div>
            <h1>
              KEEP TRYING
            </h1>
            <p>"The only way to do great work is to love what you do."</p>
            <p>You attempted 5 questions, and 0 of them (0%) are correct!</p>
          </div>
        }
        {score == 1 && 
          <div>
            <div className={styles.resultGraph}>
              <Image src='/images/quiz/answer_1.svg' alt="answer_0/5" height={290} width={290} />
            </div>
            <h1>
              OOPS!
            </h1>
            <p>"Every artist was first an amateur."</p>
            <p>You attempted 5 questions, and 1 of them (20%) are correct!</p>
          </div>
        }
        {score == 2 && 
          <div>
            <div className={styles.resultGraph}>
              <Image src='/images/quiz/answer_2.svg' alt="answer_0/5" height={290} width={290} />
            </div>
            <h1>
              ROOM FOR IMPROVEMENT
            </h1>
            <p>"Every artist dips his brush in his own soul."</p>
            <p>You attempted 5 questions, and 2 of them (40%) are correct!</p>
          </div>
        }
        {score == 3 && 
          <div>
            <div className={styles.resultGraph}>
              <Image src='/images/quiz/answer_3.svg' alt="answer_0/5" height={290} width={290} />
            </div>
            <h1>
              WELL DONE
            </h1>
            <p>"The artist is nothing without the gift, but the gift is nothing without work."</p>
            <p>You attempted 5 questions, and 3 of them (60%) are correct!</p>
          </div>
        }
        {score == 4 && 
          <div>
            <div className={styles.resultGraph}>
              <Image src='/images/quiz/answer_4.svg' alt="answer_0/5" height={290} width={290} />
            </div>
            <h1>
              AMAZING!
            </h1>
            <p>"Art enables us to find ourselves and lose ourselves at the same time."</p>
            <p>You attempted 5 questions, and 4 of them (80%) are correct!</p>
          </div>
        }
        {score == 5 && 
          <div>
            <div className={styles.resultGraph}>
              <Image src='/images/quiz/answer_5.svg' alt="answer_0/5" height={290} width={290} />
            </div>
            <h1>
              EXPERT ARTIST
            </h1>
            <p>"Creativity takes courage."</p>
            <p>You attempted 5 questions, and 5 of them (100%) are correct!</p>
          </div>
        }
      </div>
      <div className={styles.quizSummary}>
        <div>
          <div className={styles.dropdown} onClick={() => {setDropdownOpen(!dropdownOpen)}}>
            <h4>See your results</h4>
            {dropdownOpen ? <Image src={'/images/quiz/minimize.png'} alt="minimize" height={60} width={60} /> :
            <Image src={'/images/quiz/down-arrow.png'} alt="arrow down" height={60} width={60} />}
          </div>
          { dropdownOpen &&
          <div className={styles.summaryText}>
            <div>
              <div className={styles.question_title}>
                <h4>Question 1</h4>
                {answers.question_1 == selectedValues.question_1 ? <Image src={'/images/quiz/correct.png'} width={20} height={20} /> : <Image  className={styles.incorrect} src={'/images/quiz/incorrect.png'} width={20} height={20} />}
              </div>
              <p>Cyan, Magenta and Yellow are the primary colors used in subtractive color mixing to create different shades and hues by subtracting specific light wavelengths.</p>
            </div>
            <div>
              <div className={styles.question_title}>
                <h4>Question 2</h4>
                {answers.question_2 == selectedValues.question_2 ? <Image src={'/images/quiz/correct.png'} width={20} height={20} /> : <Image className={styles.incorrect} src={'/images/quiz/incorrect.png'} width={20} height={20} />}
              </div>
              <p>Henri Matisse is renowned for his vibrant depictions of Tahitian landscapes and Polynesian women.</p>
            </div>
            <div>
              <div className={styles.question_title}>
                <h4>Question 3</h4>
                {answers.question_3 == selectedValues.question_3 ? <Image src={'/images/quiz/correct.png'} width={20} height={20} /> : <Image className={styles.incorrect} src={'/images/quiz/incorrect.png'} width={20} height={20} />}
              </div>
              <p>Leonardo da Vinci's "Mona Lisa" famously features a woman with a mysterious smile, making it one of the most iconic paintings in art history.</p>
            </div>
            <div>
              <div className={styles.question_title}>
                <h4>Question 4</h4>
                {answers.question_4 == selectedValues.question_4 ? <Image src={'/images/quiz/correct.png'} width={20} height={20} /> : <Image className={styles.incorrect} src={'/images/quiz/incorrect.png'} width={20} height={20} />}
              </div>
              <p>Carmine, derived from crushed cochineal insects, produces a vibrant red dye and has been used historically in art and textiles.</p>
            </div>
            <div>
              <div className={styles.question_title}>
                <h4>Question 5</h4>
                {answers.question_5 == selectedValues.question_5 ? <Image src={'/images/quiz/correct.png'} width={20} height={20} /> : <Image className={styles.incorrect} src={'/images/quiz/incorrect.png'} width={20} height={20} />}
              </div>
              <p>Van Gogh's series of sunflower paintings showcasing his unique style and emotional intensity.</p>
            </div>
          </div>
          }
        </div>
      </div>
      <div>
      <Link href={{
          pathname: '/quiz-question-1',
        }}><button>Retake the Quiz</button></Link>
        <button>Share with Friends</button>
      </div>
    </div>
  );
}