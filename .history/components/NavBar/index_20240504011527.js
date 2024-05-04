import styles from './NavBar.module.css';
import Link from 'next/link';
import { useState } from "react";


export default function NavBar() {
    const [activeIcon, setActiveIcon] = useState('null');

    const handleIconClick = (icon) => {
        setActiveIcon(icon);
    };

    return (
        <>
        <div className={styles.navBarBehindBG}>
            <div className={styles.gradientBlur}></div>
            <div className={styles.navBar}>
                <ul className={styles.navList}>
                    <li onClick ={() => handleIconClick('home')} className={activeIcon === 'home' ? styles.active : ''}>
                        <Link className={styles.link} href="/home-page"> 
                            <img className={`${styles.homeIcon} ${styles.icons}`} 
                                src={activeIcon === 'home' ? "/images/home-active-icon.png" : "/images/home-icon.png"} 
                                alt="Activity Icon"
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('activity')} className={activeIcon === 'activity' ? styles.active : ''}>
                        <Link className={styles.link} href="/activity-tracking"> 
                            <img className={`${styles.activityIcon} ${styles.icons}`} 
                                src={activeIcon === 'activity' ? "/images/activity-active-icon.png" : "/images/activity-icon.png"}  
                                alt="Activity Icon" 
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li className={styles.navBarIcons}>
                        <div className={styles.circleBehindPlus}></div>
                        <Link className={styles.link} href="/new-prompt"> 
                            <img className={`${styles.plusIcon}`} src="/images/plus-icon.png"
                                alt="Create Post Icon" 
                                width="60" 
                                height="60"/>
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('chat')} className={activeIcon === 'chat' ? styles.active : ''}>
                        <Link className={styles.link} href="/community-page"> 
                            <img className={`${styles.chatIcon} ${styles.icons}`} 
                                src={activeIcon === 'chat' ? "/images/chat-active-icon.png" : "/images/chat-icon.png"}  
                                alt="Chat Icon" 
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('home')} className={activeIcon === 'home' ? styles.active : ''}>
                        <Link className={styles.link} href="/profile"> 
                            <img className={`${styles.profileIcon} ${styles.icons}`} 
                                src="/images/profile-icon.png"
                                alt="Profile Icon"  
                                width="25" height="25"/> 
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}