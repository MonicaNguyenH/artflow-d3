import styles from "@/styles/GeneratingPrompt.module.css"
import React from 'react';
import GradientMeshTwo from "@/components/GradientMeshTwo";

export default function GeneratingPrompt(){
    return(
        <>
        <div className={styles.GeneratingPrompt}>
            <div>
                <GradientMeshTwo/>
            </div>
            <div className={styles.ElementsBox}>
                <div className={styles.GenerateElements}>
                    <div className={styles.loadingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <h1 className={styles.GenerateHeading}>
                            Curating your next masterpiece
                        </h1>
                    </div>
                    <div className={`${styles.loadingDots} ${styles.alignRight}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}