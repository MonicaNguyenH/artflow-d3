import styles from "@/styles/GeneratingPrompt.module.css";
import React, {useEffect} from 'react';
import GradientMeshTwo from "@/components/GradientMeshTwo";
import { useRouter } from "next/router";
import HeaderArea from "@/components/HeadArea";

export default function GeneratingPrompt(){
    const router = useRouter();
    useEffect(() => {
        const categories = localStorage.getItem('Categories');
        console.log(categories);
        (async function() {
            const response = await fetch('api/gpt', {
                method: 'POST',
                body: JSON.stringify(categories),
              })
              const data = await response.json();
              console.log(data);
              localStorage.setItem('Prompt', data);
              router.push('/prompt-page');
        })();
    }, []);
    return(
        <>
            <HeaderArea title="Prompt Loading page" description="Generate prompt loading/onhold page"/>
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