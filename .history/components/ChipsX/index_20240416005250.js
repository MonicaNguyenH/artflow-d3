import styles from "./ChipsX.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ChipsX() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    }

    return (
        <>
            <div className={styles.promptHeader}>
                <div>
                    {isVisible && (
                        <div>
                            <button className={styles.chipsContainerRV} onClick={handleClick}>
                                Animal
                                <img className={styles.chipsImg} src="/images/X_light_blue.svg" alt="X light blue" width="12.94" height="12.94"/>
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    {isVisible && (
                        <div>
                            <button className={styles.chipsContainerBB} onClick={handleClick}>
                                Adventure
                                <img className={styles.chipsImg} src="/images/X_light_blue.svg" alt="X light blue" width="12.94" height="12.94"/>
                            </button>
                        </div>
                    )}
                </div>
                <div className={styles.chipsContainer}>
                    <button>Add Genre</button>
                </div>
            </div>
        </>
    )
}