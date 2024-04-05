import styles from './ComProject.module.css';

export default function ComProject() {
    return (
        <>
            <div className={styles.projectWrap}>
                <div className={styles.projectPic}>
                    {/*<img src="/images/gradient_1.png" alt="Gradient 1"/>*/}
                    <div className={styles.prompt}>
                        <p>This is a prompt</p>
                    </div>
                    <div className={styles.date}>
                        <p>
                            Feb 26
                        </p>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.send}></div>
                    <div className={styles.reaction}></div>
                </div>
            </div>
        </>
    )
}