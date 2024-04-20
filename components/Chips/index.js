import styles from "./Chips.module.css";
import React, { useState, useEffect } from 'react';

const Chips = ({ labels }) => {
    const [selectedChips, setSelectedChips] = useState([]);

    const handleChipClick = (label) => {        
        if (selectedChips.includes(label)) {
            setSelectedChips(selectedChips.filter(chip => chip !== label));
        } else {
            if(selectedChips.length < 4) {
                setSelectedChips([...selectedChips, label]);
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('Categories', selectedChips);
        console.log(localStorage.getItem('Categories'));
    }
    , [selectedChips])

    return (
        <div className={styles['chipsContainer']}>
            {labels.map((label, index) => (
                <div
                    key={index}
                    className={`${styles.chip} ${selectedChips.includes(label) ? styles.selected : ''}`}
                    onClick={() => handleChipClick(label)}
                >
                    {label}
                </div>
            ))}
        </div>
    );
};
export default Chips;
