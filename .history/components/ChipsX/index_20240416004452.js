import styles from "./ChipsX.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ChipsX({chipsXText, imgSrc, imgAlt}) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        setIsVisible(false);
    }

    return (
        <>
            {isVisible && (
                <div>
                    <button className={styles.chipsContainer} onClick={handleClick}>
                        {chipsXText}
                        <img className={styles.chipsImg} src={imgSrc} alt={imgAlt} width="12.94" height="12.94"/>
                    </button>
                </div>
            )}
        </>
    )
}