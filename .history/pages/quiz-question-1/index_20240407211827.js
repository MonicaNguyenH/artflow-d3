import React, { useState } from 'react';
import Link from 'next/link';
import answers from '@/data/quiz-answers';
import Image from 'next/image';

import styles from "@/styles/Quiz.module.css";

export default function QuestionOne() {

  const [selectedValues, setSelectedValues] = useState({});
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues({
      ...selectedValues,
      [name]: value
    });
  };

  return (
    <div className={`${styles.question_1} ${styles.quizNav}`}> 
      <nav className={styles.quizQuestionNav}>
        <Link href="/quiz-intro">
          <Image src='/images/quiz/back-arrow.png' alt="back arrow" width={62} height={106} />
        </Link>
        <div className={styles.progress}>
          <div className={styles['progress-value']}></div>
        </div>
        <p className={styles.ordinalNumber}><span className={styles.pinkNumber}>1</span>/5</p>
      </nav>
        {answerSubmitted &&
          <div className={styles.overlay}>  
            <h3>The verdict is...</h3>
            <h4>Cyan, Magenta, Yellow</h4>    
            <p>These colors are combined in various proportions to create different shades and hues by subtracting specific wavelengths of light.</p>
            <Image src='/images/quiz/question1.png' alt="cyan magenta yellow" width={600} height={576} />
            <Link href={{
              pathname: '/quiz-question-2',
              query: selectedValues
            }}><button>Next</button></Link>
        </div>}
        <div className={styles.quiz}>      
          <h1>Question 1</h1>
          <p>What primary colors are used in subtractive color mixing?</p>
          <div className={styles.questions}>
            <input type="radio" id="a" name="question_1" value="A" onChange={handleRadioChange} />
            <label htmlFor="a" className={selectedValues.question_1 === 'A' ? styles.selected : ''}>A. Red, Green, Blue</label>
            <input type="radio" id="b" name="question_1" value="B" onChange={handleRadioChange} />
            <label htmlFor="b" className={selectedValues.question_1 === 'B' ? styles.selected : ''}>B. Cyan, Magenta, Yellow</label>
            <input type="radio" id="c" name="question_1" value="C" onChange={handleRadioChange} />
            <label htmlFor="c" className={selectedValues.question_1 === 'C' ? styles.selected : ''}>C. Red, Yellow, Blue</label>  
            <input type="radio" id="d" name="question_1" value="D" onChange={handleRadioChange} />
            <label htmlFor="d" className={selectedValues.question_1 === 'D' ? styles.selected : ''}>D. Green, Yellow, Violet</label>  
            <button className={styles.button} onClick={() => {selectedValues.question_1 && setAnswerSubmitted(true)}}>Next</button>        
          </div>
        </div>      
    </div>
  );
}