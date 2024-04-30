import styles from './ProfileTab.module.css';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ProfileTab() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
    <>
        <div>
            <div className="tab">
                <button
                    className={activeTab === 1 ? 'active' : ''}
                    onClick={() => handleTabChange(1)}>
                    <img className={styles.avatar} src="/images/grid-profile.svg" alt="dog profile image"/>
                </button>
                <button
                    className={activeTab === 2 ? 'active' : ''}
                    onClick={() => handleTabChange(2)}>
                    <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 1 && 
                    <div>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                        <img className={styles.avatar} src="/images/heart-white-profile.svg" alt="dog profile image"/>
                    </div>
                }
                {activeTab === 2 && <p>Content of Tab 2</p>}
            </div>
        </div>
    </>
    )
}