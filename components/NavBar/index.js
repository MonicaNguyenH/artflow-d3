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
            <div className={styles.navBar}>
                <ul className={styles.navList}>
                    <li onClick ={() => handleIconClick('home')} className={activeIcon === 'home' ? styles.active : ''}>
                        <Link className={styles.link} href="/"> 
                            <img className={`${styles.homeIcon} ${styles.icons}`} 
                                src={activeIcon === 'home' ? "/images/home-active-icon.png" : "/images/home-icon.png"} 
                                alt="Activity Icon"
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('activity')} className={activeIcon === 'activity' ? styles.active : ''}>
                        <Link className={styles.link} href="/Activity"> 
                            <img className={`${styles.activityIcon} ${styles.icons}`} 
                                src={activeIcon === 'activity' ? "/images/activity-active-icon.png" : "/images/activity-icon.png"}  
                                alt="Activity Icon" 
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li className={styles.navBarIcons}>
                        <div className={styles.circleBehindPlus}></div>
                        <Link className={styles.link} href="/New"> 
                            <img className={`${styles.plusIcon}`} src="/images/plus-icon.png"
                                alt="Create Post Icon" 
                                width="60" 
                                height="60"/>
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('chat')} className={activeIcon === 'chat' ? styles.active : ''}>
                        <Link className={styles.link} href="/Chat"> 
                            <img className={`${styles.chatIcon} ${styles.icons}`} 
                                src={activeIcon === 'chat' ? "/images/chat-active-icon.png" : "/images/chat-icon.png"}  
                                alt="Chat Icon" 
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('home')} className={activeIcon === 'home' ? styles.active : ''}>
                        <Link className={styles.link} href="/Profile"> 
                            <img className={`${styles.profileIcon} ${styles.icons}`} 
                                src="/images/profile-icon.png"
                                alt="Profile Icon"  
                                width="25" height="25"/> 
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}