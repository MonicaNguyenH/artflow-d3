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
                    </div>
                </div>
                <div className={styles.bottomContainer}></div>
            </div>
        </>
    )
}