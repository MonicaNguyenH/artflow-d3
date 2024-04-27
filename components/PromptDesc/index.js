import styles from './PromptDesc.module.css';
import Image from 'next/image';
import React, {useState, useEffect } from 'react';
import Link from 'next/link';

export default function PromptDesc({title, description}) {
    const [saved, setSaved] = useState(false);
    const [tagsArr, setTagsArr] = useState([]);

    const handleClickSaved = () => {
        setSaved(!saved);
    }

    useEffect(() => {
        const tags = localStorage.getItem('Categories');
        console.log(tags);     
        setTagsArr(tags.split(','));   
      }, [])

    const tagStyling = ["var(--rose)", "var(--light-blue)", "var(--blue)", "var(--light-pink)"];

    return (
        <>
            <div className={styles.promptDescContainer}>
                <div className={styles.container}>
                    <div className={styles.mainContent}>
                        <div className={styles.subHead}>
                            <p>New Prompt</p>
                        </div>
                        <div className={styles.header}>
                            <p>{title}</p>
                        </div>
                        <div className={styles.description}>
                            <p>
                            {description}
                            </p>
                        </div>
                        <div className={styles.tags}>
                            {tagsArr.map((tag, index) => {
                                return (
                                    <div className={styles.chip} style={{ color: tagStyling[index]}}>
                                        <p>{tag}</p>
                                    </div>
                                )
                            })}                            
                        </div>
                        <div className={styles.buttons}>
                            <div className={styles.startButton}>
                                <Link href="/drawing-page">
                                    <button>Start Now</button>
                                </Link>
                            </div>
                            <button 
                                className={`${styles.icon} ${saved ? styles.iconSaved : ''}`}
                                onClick= {handleClickSaved}>
                                    <img src="/images/heart_dark_grey.svg" alt="save prompt"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.topContainer}></div>
            </div>
        </>
    )
}