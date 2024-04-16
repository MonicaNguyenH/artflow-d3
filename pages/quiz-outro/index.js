import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import answers from '@/data/quiz-answers';
import Image from 'next/image';
import GradientMesh from "@/components/GradientMesh";
import styles from "@/styles/QuizOuttro.module.css";

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
    <div className={`${styles.quizOutro} ${styles.quiz}`} style={{position:'relative'}}>
      <div className={styles.textElements}>
        <div className={styles.top}>
          {loadingDone ?  
          <div>
            <div className={styles.outtro2}>
              <h2 className={styles.outtro2Heading}>
                GOOD JOB!
              </h2>
              <p className={styles.outtro2Paragragh}>Check out your score and let's keep the creative vibes flowing!</p>
            </div>
          </div>
          :
          <div className={styles.outtro1}>
            <h2 className={styles.outtro1Heading}>
              <span className={styles.outtro1HeadingArt}>Art</span> is the <br/>only way 
              <br/>
              to run away without 
              <br/>leaving <br/>home
            </h2>
            <p className={styles.outtro1Paragragh}>Twyla Tharp</p>
          </div>}
        </div>

        <div className={styles.bottom}>
          {loadingDone ?  
            <div>
              <Link className={styles.resultButtonLink} href={{
                  pathname: '/quiz-results',
                  query: selectedValues
                }}><button className={styles.resultButton} tabIndex={1}>View My Result</button></Link>
            </div>
            :
            <div className={styles.progress}>
              <div className={styles['progress-value']}></div>
            </div>}      
        </div>
      </div>
      <div className={styles.background}>
          <GradientMesh className={`${styles.gradientMeshBG}`}/>
      </div>
      </div>
  );
}