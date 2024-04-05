import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import answers from '@/data/quiz-answers';
import Image from 'next/image';

import styles from "@/styles/Quiz.module.css";

export default function QuizOutro() {

  const searchParams = useSearchParams();
  const [selectedValues, setSelectedValues] = useState({});
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    // Convert searchParams to an object
    const params = Object.fromEntries(searchParams);
    // Setting the state to have the object that carried over from the last page(s)
    setSelectedValues(params);
  }, [searchParams]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.quizOutro} ${styles.quiz}`}> 

      <div className={styles.top}>
        {loadingDone ?  
        <div>
          <h1>
            GOOD JOB!
          </h1>
          <p>Check out your score and let's keep the creative vibes flowing!</p>
        </div>
        :
        <div>
          <h1>
            Art is the only way to run away without leaving home
          </h1>
          <p>Twyla Tharp</p>
        </div>}
      </div>

      <div className={styles.bottom}>
      {loadingDone ?  
        <div>
          <Link href={{
              pathname: '/quiz-results',
              query: selectedValues
            }}><button>View My Result</button></Link>
        </div>
        :
        <div className={styles.progress}>
          <div className={styles['progress-value']}></div>
        </div>}      
      </div>

    </div>
  );
}