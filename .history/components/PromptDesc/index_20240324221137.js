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
                        <h1>This is the caption</h1>
                    </div>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                        </p>
                    </div>
                    <div className={styles.tags}>
                        <div className={styles.chip}>
                            <p>Chips 1</p>
                        </div>
                        <div className={styles.chip}>
                            <p>Chips 2</p>
                        </div>
                        <div className={styles.chip}>
                            <p>Chips 3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.topContainer}></div>
        </>
    )
}