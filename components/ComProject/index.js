import styles from './ComProject.module.css';

export default function ComProject() {
    return (
        <>
            <div className={styles.projectWrap}>
                <div className={styles.icons}>
                    <div className={styles.forwardIcon} tabIndex={4}>
                        <img src='/images/chat/forward-icon-bg.svg' alt='forward icon with grey background'/>
                    </div>
                    <div className={styles.saveIcon} tabIndex={5}>
                        <img src='/images/chat/save-icon-bg.svg' alt='save icon with grey background'/>
                    </div>
                </div>
                <div className={styles.projectPic}>
                    <div className={styles.prompt}>
                        <p>A playful dog</p>
                    </div>
                    <div className={styles.date}>
                        <p>
                            May 17
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}