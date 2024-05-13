import styles from './ProfileTab.module.css';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function ProfileTab() {
    const [activeTab, setActiveTab] = useState(1);
    const [drawing, setDrawing] = useState('');
    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    useEffect(() => { 
        const localStorageDrawing = localStorage.getItem('Drawing');
        setDrawing(localStorageDrawing);
    }, [])

    return (
      <>
        <div className={styles.main}> 
            <div className={styles.tab}>
                <button  tabIndex={4}
                    className={activeTab === 1 ? styles.active : styles.buttonTab}
                    onClick={() => handleTabChange(1)}>
                    <img className={styles.girdIcon} src="/images/grid-profile.svg" width={18} height={20} alt="gird icon"/>
                </button>
                <button  tabIndex={5}
                    className={activeTab === 2 ? styles.active : styles.buttonTab}
                    onClick={() => handleTabChange(2)}>
                    <img className={styles.heartIcon} src="/images/heart-white-profile.svg" width={20} height={19} alt="liked icon"/>
                </button>
            </div>
            <div className={styles.tabContent}>
                {activeTab === 1 && 
                    <div className={styles.gridContainer}>
                        {drawing && <div className={styles.squareImage}><img className={styles.img} src={drawing} alt="profile image"/></div>}
                        <img className={styles.squareImage} src="/images/profile/kenny.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-1.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-2.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-3.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-4.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-5.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-6.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-7.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-8.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-9.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-10.png" alt="profile image"/>
                    </div>
                }
                {activeTab === 2 && 
                    <div className={styles.likedContainer}>
                        <img className={styles.img} src="/images/profile/profile-img-1.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-11.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-12.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-13.png" alt="profile image"/>
                        <img className={styles.img} src="/images/profile/profile-img-14.png" alt="profile image"/>
                    </div>
                }
            </div>
        </div>
    </>
    )
}