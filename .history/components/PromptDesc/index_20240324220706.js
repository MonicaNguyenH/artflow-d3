import styles from './PromptDesc.module.css';

export default function PromptDesc() {
    return (
        <>
            <div className={styles.topContainer}></div>
            <div className={styles.container}>
                <div className={styles.subHead}>
                    <p>New Prompt</p>
                </div>
                <div className={styles.header}>
                    <h1>This is the caption</h1>
                </div>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
                    </p>
                </div>
                <div>
                    <div>
                        <p>Chips 1</p>
                    </div>
                </div>
            </div>
        </>
    )
}