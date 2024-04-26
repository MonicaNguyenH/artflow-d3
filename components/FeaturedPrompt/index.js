import styles from "./FeaturedPrompt.module.css"
export default function FeaturedPrompt() {
    return (
        <>
              <div className={styles.promptDescContainer}>
                
                <div className={styles.container}>
                    <div className={styles.mainContent}>
                        <div className={styles.subHead}>
                            <p>Prompt of the Day</p>
                        </div>
                        <div className={styles.header}>
                            <p>Cozy Cabin in the Woods</p>
                        </div>
                        <div className={styles.description}>
                            <p>
                            Stumbling upon a rustic hideaway deep in the woods, where the warm glow from the cabin's windows calls out to tired wanderers.
                            </p>
                        </div>
                        <div className={styles.firstrow}>
                    <div className={styles.cabin01}>
                        <img src="/images/cabin1.jpg" width={110} height={110}/>
                    </div>
                    <div className={styles.cabin02}>
                        <img src="/images/cabin2.jpg" width={110} height={110}/>
                    </div>
                    <div className={styles.cabin03}>
                        <img src="/images/cabin3.jpg" width={110} height={110}/>
                    </div>
        </div>
        <div className={styles.secondrow}>
                    <div className={styles.cabin04}>
                        <img src="/images/cabin4.jpg" width={110} height={110}/>
                    </div>
                    <div className={styles.cabin05}>
                        <img src="/images/cabin5.jpg" width={110} height={110}/>
                    </div>
                    <div className={styles.cabin06}>
                        <img src="/images/cabin6.jpg" width={110} height={110}/>
                    </div>
        </div>
        <button className={styles.startNow}>Start Now</button>
        <div className={styles.heartbutton}>
        <button className={styles.heartButton}><img src="/images/Heart.png" width={25} height={25}/></button>
        </div>
                    </div>
                </div>
            </div>
        </>
    )
}