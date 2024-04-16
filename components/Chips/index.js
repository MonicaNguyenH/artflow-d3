import styles from "./Chips.module.css";
import React, { useState } from 'react';

const Chips = ({ labels }) => {
    const [selectedChips, setSelectedChips] = useState([]);

    const handleChipClick = (label) => {
        if (selectedChips.includes(label)) {
            setSelectedChips(selectedChips.filter(chip => chip !== label));
        } else {
            setSelectedChips([...selectedChips, label]);
        }
    }

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
