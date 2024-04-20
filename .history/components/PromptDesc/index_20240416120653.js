import styles from './PromptDesc.module.css';

export default function PromptDesc() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.subHead}>
                        <p>New Prompt</p>
                    </div>
                    <div className={styles.header}>
                        <p>Playful Paws</p>
                    </div>
                    <div className={styles.description}>
                        <p>
                        Draw a dog in action, his paws poised to spring into action as he leaps into the air, the wind ruffling his fur as he darts across the grass with unwavering determination. 
                        </p>
                    </div>
                    <div className={styles.tags}>
                        <div className={styles.chip} style={{ color: 'var(--rose)' }}>
                            <p>Chips 1</p>
                        </div>
                        <div className={styles.chip} style={{ color: 'var(--light-blue)' }}>
                            <p>Chips 2</p>
                        </div>
                        <div className={styles.chip} style={{ color: 'var(--blue)' }}>
                            <p>Chips 3</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.startButton}>
                            <button>Start Now</button>
                        </div>
                        <div className={styles.icon}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.topContainer}></div>
        </>
    )
}