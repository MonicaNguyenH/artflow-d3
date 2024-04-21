import Image from "next/image";
import styles from "@/styles/NewPrompt.module.css";
import Chips from "@/components/Chips";
import React from 'react';
import NavBar from "@/components/NavBar"
import Link from "next/link";

const NewPrompt = () => {
    const labels = [
        'People', 'Scenery', 'Food',
        'Cityscape', 'Animal', 'Nature',
        'Kids', 'Still Life', 'Mythology',
        'Cartoon', 'Seasons', 'Architecture',
        'Skies', 'Abstract', 'Adventure',
        'Indoor', 'Fashion', 'Insects',
        'Impressionism', 'Mythical', 'Birds',
        'Historical', 'Dinosaurs', 'Futuristic',
        'Cloud', 'Cat', 'Flowers',  
        'Countryside', 'Plants', 'Earth',
        'Universe', 'Robots', 'Fantasy',
        'Surrealism', 'Ocean', 'Sports'
    ];

    return (
        <div className={styles.container}>
            <div className={styles.chipsContainer}>
                <h1 className={styles.chipsContainerHeading}>What do you want to draw?</h1>
                <p className={styles.chipsContainerParagraph}>Select up to 4 categories</p>
                <Chips labels={labels}/>
            </div>
            <div className={styles.continueContainer}>
                <p className={styles.continueParagraph}>Click continue to get a prompt</p>
                <Link href="/generating-prompt">
                    <button className={styles.continueButton}>Continue</button>
                </Link>
            </div>
            <div className={styles.footer}> 
                <NavBar/>
            </div>
        </div>
    );
};

export default NewPrompt;

