import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import answers from '@/data/quiz-answers';
import Image from 'next/image';

import styles from "@/styles/Quiz.module.css";

export default function QuestionFive() {

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
    <div className={`${styles.question_5} ${styles.quizNav}`}> 
    <nav className={styles.quizQuestionNav}>
      <div>&nbsp;</div>
      <div className={styles.progress}>
        <div className={styles['progress-value']}></div>
      </div>
      <p className={styles.ordinalNumber}><span className={styles.pinkNumber}>5</span>/5</p>
    </nav>
      {answerSubmitted &&
        <div className={styles.overlay2}>  
          <h3>The verdict is...</h3>
          <h4>Sunflowers</h4>    
          <p>Vincent van Gogh is renowned for his series of vibrant sunflower paintings, which exemplify his distinctive style with bold colors and energetic brushstrokes.</p>
          <Image src='/images/quiz/question5.png' alt="sunflowers" width={800} height={800} />
          <Link href={{
            pathname: '/quiz-outro',
            query: selectedValues
          }}><button tabIndex={6}>Next</button></Link>
      </div>}
      <div className={styles.quiz}>      
        <h1>Question 5</h1>
        <p>Vincent van Gogh is famous for his series of paintings depicting which flower?</p>
        <div className={styles.questions} style={{ marginTop : '200px' }}>
          <input type="radio" id="a" name="question_5" value="A" onChange={handleRadioChange} />
          <label htmlFor="a" className={selectedValues.question_5 === 'A' ? styles.selected : ''} tabIndex={1}>A. Daises</label>
          <input type="radio" id="b" name="question_5" value="B" onChange={handleRadioChange} />
          <label htmlFor="b" className={selectedValues.question_5 === 'B' ? styles.selected : ''} tabIndex={2}>B. Sunflowers</label>
          <input type="radio" id="c" name="question_5" value="C" onChange={handleRadioChange} />
          <label htmlFor="c" className={selectedValues.question_5 === 'C' ? styles.selected : ''} tabIndex={3}>C. Roses</label>  
          <input type="radio" id="d" name="question_5" value="D" onChange={handleRadioChange} />
          <label htmlFor="d" className={selectedValues.question_5 === 'D' ? styles.selected : ''} tabIndex={4}>D. Tulips</label>  
          <button className={styles.button} onClick={() => {selectedValues.question_5 && setAnswerSubmitted(true)}} tabIndex={5}>Next</button>        
        </div>
      </div>      
    </div>
  );
}