import Image from "next/image";
import styles from "@/styles/NewPrompt.module.css";
import Chips from "@/components/Chips";
import React from 'react';
import NavBar from "@/components/NavBar"
import Link from "next/link";
import HeaderArea from "@/components/HeadArea";

const NewPrompt = () => {
    const labels = [
        'People', 'Scenery', 'Food',
        'Cityscape', 'Animal', 'Nature',
        'Landscape', 'Still Life', 'Mythology',
        'Cartoon', 'Seasons', 'Architecture',
        'Dreams', 'Abstract', 'Creatures',
        'Indoor', 'Fashion', 'Insects',
        'Impressionism', 'Fantasy', 'Birds',
        'Historical', 'Dinosaurs', 'Futuristic',
        'Dog', 'Cat', 'Flowers', 'Fish', 'Adventure',
        'Sad', 'Happy', 'Portrait',
        'Space', 'Robots', 'Horror',
        'Surrealism', 'Ocean', 'Aliens', 'Celestial', 'Plants'
    ];

    return (
        <>
            <HeaderArea title="New Prompt" description="Creating new prompt page"/>
            <main className={`${styles.main}`}>
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
            </main>
        </>
    );
};

export default NewPrompt;

