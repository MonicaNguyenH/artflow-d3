import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import answers from '@/data/quiz-answers';
import Image from 'next/image';

import styles from "@/styles/Quiz.module.css";

export default function QuestionThree() {

  const searchParams = useSearchParams();
  const [selectedValues, setSelectedValues] = useState({});
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  useEffect(() => {
    // Convert searchParams to an object
    const params = Object.fromEntries(searchParams);
    // Setting the state to have the object that carried over from the last page(s)
    setSelectedValues(params);
  }, [searchParams]);

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setSelectedValues({
      ...selectedValues,
      [name]: value
    });
  };

  return (
    <div className={`${styles.question_3} ${styles.quizNav}`}> 
    <nav className={styles.quizQuestionNav}>
      <div>&nbsp;</div>
      <div className={styles.progress}>
        <div className={styles['progress-value']}></div>
      </div>
      <p className={styles.ordinalNumber}><span className={styles.pinkNumber}>3</span>/5</p>
    </nav>
      {answerSubmitted &&
        <div className={styles.overlay3}>  
          <h3>The verdict is...</h3>
          <h4>Mona Lisa</h4>    
          <p>The painting is known for its masterful use of light, shadow, and perspective, as well as for the intriguing aura surrounding the subject's identity and expression.</p>
          <div className={styles.bottomRow}>
            <Image src='/images/quiz/question3.png' alt="mona lisa painting" width={800} height={800} />
            <Link href={{
              pathname: '/quiz-question-4',
              query: selectedValues
            }}><button className={styles.button3} tabIndex={6}>Next</button></Link>
          </div>
      </div>}
      <div className={styles.quiz}>      
        <h1>Question 3</h1>
        <p>In which painting does Leonardo da Vinci depict a woman with a mysterious smile against a colorful backdrop?</p>
        <div className={styles.questions} style={{ marginTop : '200px' }}>
          <input type="radio" id="a" name="question_3" value="A" onChange={handleRadioChange} />
          <label htmlFor="a" className={selectedValues.question_3 === 'A' ? styles.selected : ''} tabIndex={1}>A. The Starry Night</label>
          <input type="radio" id="b" name="question_3" value="B" onChange={handleRadioChange} />
          <label htmlFor="b" className={selectedValues.question_3 === 'B' ? styles.selected : ''} tabIndex={2}>B. The Last Supper</label>
          <input type="radio" id="c" name="question_3" value="C" onChange={handleRadioChange} />
          <label htmlFor="c" className={selectedValues.question_3 === 'C' ? styles.selected : ''} tabIndex={3}>C. The Scream</label>  
          <input type="radio" id="d" name="question_3" value="D" onChange={handleRadioChange} />
          <label htmlFor="d" className={selectedValues.question_3 === 'D' ? styles.selected : ''} tabIndex={4}>D. Mona Lisa</label>  
          <button className={styles.button} onClick={() => {selectedValues.question_3 && setAnswerSubmitted(true)}} tabIndex={5}>Next</button>        
        </div>
      </div>      
    </div>
  );
}