import styles from './ComProject.module.css';
import { useEffect, useState } from 'react';

export default function ComProject() {
  const [submittedDrawing, setSubmittedDrawing] = useState();
  const [promptTitle, setPromptTitle] = useState('');
  
  useEffect(() => { 
    const localStorageDrawing = localStorage.getItem('Drawing');
    console.log(localStorageDrawing);
    setSubmittedDrawing(localStorageDrawing);
  }, [])

  useEffect(() => {
    console.log(localStorage.getItem('Prompt'));
    const prompt = localStorage.getItem('Prompt').trim().split('%');
    console.log(prompt);
    console.log(prompt[0].length);
    let textPrompt = prompt[0];
    if(prompt[0].length > 23) {
        textPrompt = textPrompt.substring(0, 23) + '...';
    }
    setPromptTitle(textPrompt)
  }, [])

  const customInlineStyles = {
    backgroundImage: submittedDrawing ? `url(${submittedDrawing})` : "url(/images/profile/profile-img-1.png)"
  }

    return (
        <>
            <div className={styles.projectWrap}>
                <div className={styles.icons}>
                    <div className={styles.forwardIcon} tabIndex={4}>
                        <img src='/images/chat/forward-icon-bg.svg' alt='forward icon with grey background'/>
                    </div>
                    <div className={styles.saveIcon} tabIndex={5}>
                        <img src='/images/chat/save-icon-bg.svg' alt='save icon with grey background'/>
                    </div>
                </div>
                <div className={styles.projectPic} style={customInlineStyles}>
                    <div className={styles.prompt}>
                        <p>{promptTitle ? promptTitle : 'A playful dog'}</p>
                    </div>
                    <div className={styles.date}>
                        <p>
                            May 17
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}