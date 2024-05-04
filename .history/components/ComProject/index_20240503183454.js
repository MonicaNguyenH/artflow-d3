import styles from './ComProject.module.css';

export default function ComProject() {
    return (
        <>
            <div className={styles.projectWrap}>
                <div className={styles.icons}>
                    <div className={styles.send}>
                        <img src='/images/chat/save-icon-bg.svg' alt=''/>
                    </div>
                    <div className={styles.reaction}></div>
                </div>
                <div className={styles.projectPic}>
                    {/*<img src="/images/gradient_1.png" alt="Gradient 1"/>*/}
                    <div className={styles.prompt}>
                        <p>A playful dog</p>
                    </div>
                    <div className={styles.date}>
                        <p>
                            Mar 30
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}