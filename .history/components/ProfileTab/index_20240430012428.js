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
                    <div>
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