import styles from "./ChipsX.module.css";
import Image from "next/image";

export default function ChipsX({chipsXText}) {
    return (
        <>
            <div>
                <button>
                    <img src="/images/X_light_blue.svg" alt="Chips with X" width="12.94" height="12.94"/>
                    {chipsXText}
                </button>
            </div>
        </>
    )
}