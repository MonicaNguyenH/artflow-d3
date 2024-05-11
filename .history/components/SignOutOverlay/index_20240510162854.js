import styles from './SignOutOverlay.module.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SignOutOverlay( {promptActiveProp, onCancel} ){
  const [promptActive, setPromptActive] = useState(promptActiveProp);

  const handleCancel = () => {
    setPromptActive(!promptActive);
    onCancel();
  }

  useEffect(() => {
    setPromptActive(promptActiveProp);
  }, [promptActiveProp]);
  return promptActive ? (
    <>
      <div className={styles.backgroundOverlay}>
        <div className={styles.overlay2}>  
            <h3>Sign Out</h3>
            <p>Are you sure you want to sign out?</p>
            <div className={styles.buttons}>
              <button onClick={handleCancel} tabIndex={1}>Cancel</button>            
              <Link href={{
                  pathname: '/',
                  query: {signOut: 'true'}
              }}><button className={styles.signOut} tabIndex={2}>Sign Out</button></Link>
            </div>
        </div>
      </div>
    </>
  ) : null;
}

