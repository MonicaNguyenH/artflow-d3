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
            {isVisible && (
                <div>
                    <button className={styles.chipsContainer} onClick={handleClick}>
                        Animal
                        <img className={styles.chipsImg} src="/images/X_light_blue.svg" alt="X light blue" width="12.94" height="12.94"/>
                    </button>
                </div>
            )}
        </>
    )
}