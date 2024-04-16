import styles from "./ChipsX.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ChipsX() {
    const [clickAnimal, setClickAnimal] = useState(true);
    const [clickAdventure, setClickAdventure] = useState(true);

    const handleClickAnimal = () => {
        setClickAnimal(false);
    }

    const handleClickAdventure = () => {
        setClickAdventure(false);
    }

    return (
        <>
            <div className={styles.promptHeader}>
                <div>
                    {clickAnimal && (
                        <div>
                            <button className={styles.chipsContainerBB} onClick={handleClickAnimal}>
                                Animal
                                <img className={styles.chipsImg} src="/images/X_light_blue.svg" alt="X light blue" width="12.94" height="12.94"/>
                            </button>
                        </div>
                    )}
                </div>
                <div>
                    {clickAdventure && (
                        <div>
                            <button className={styles.chipsContainerRV} onClick={handleClickAdventure}>
                                Adventure
                                <img className={styles.chipsImg} src="/images/X_rose.svg" alt="X light blue" width="12.94" height="12.94"/>
                            </button>
                        </div>
                    )}
                </div>
                <div className={styles.addGenre}>
                    <button>Add Genre</button>
                </div>
            </div>
        </>
    )
}