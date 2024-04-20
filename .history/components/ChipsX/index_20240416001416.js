import styles from "./ChipsX.module.css";
import Image from "next/image";

export default function ChipsX({chipsXText}) {
    return (
        <>
            <div>
                <button className={styles.chipsContainer}>
                    {chipsXText}
                    <img className={styles.chipsImg} src="/images/X_light_blue.svg" alt="Chips with X" width="12.94" height="12.94"/>
                </button>
            </div>
        </>
    )
}