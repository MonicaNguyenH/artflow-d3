import styles from './ComProject.module.css';

export default function ComProject() {
    return (
        <>
            <div className={styles.projectWrap}>
                <div className={styles.icons}>
                    <div className={styles.forwardIcon} tabIndex={1}>
                        <img src='/images/chat/forward-icon-bg.svg' alt='forward icon with grey background'/>
                    </div>
                    <div className={styles.saveIcon} tabIndex={2}>
                        <img src='/images/chat/save-icon-bg.svg' alt='save icon with grey background'/>
                    </div>
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