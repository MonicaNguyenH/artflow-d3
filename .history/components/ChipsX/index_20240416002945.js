import styles from "./ChipsX.module.css";
import Image from "next/image";

export default function ChipsX({chipsXText, imgSrc, imgAlt}) {
    return (
        <>
            <div>
                <button className={styles.chipsContainer}>
                    {chipsXText}
                    <img className={styles.chipsImg} src={imgSrc} alt={imgAlt} width="12.94" height="12.94"/>
                </button>
            </div>
        </>
    )
}