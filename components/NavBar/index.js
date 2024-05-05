import styles from './NavBar.module.css';
import Link from 'next/link';
import { useState } from "react";
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';


export default function NavBar() {
    const [activeIcon, setActiveIcon] = useState('null');
    const { data: session } = useSession();
    const router = useRouter()

    const handleIconClick = (icon) => {
        setActiveIcon(icon);
    };

    return (
        <>
        <div className={styles.navBarBehindBG}>
            <div className={styles.gradientBlur}></div>
            <div className={styles.navBar}>
                <ul className={styles.navList}>
                    <li onClick ={() => handleIconClick('home')} className={activeIcon === 'home' || router.pathname == "/home-page" ? styles.active : ''}>
                        <Link className={styles.link} href="/home-page"> 
                            <img className={`${styles.homeIcon} ${styles.icons}`} 
                                src={activeIcon === 'home' || router.pathname == "/home-page" ? "/images/home-active-icon.png" : "/images/home-icon.png"} 
                                alt="Activity Icon"
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('activity')} className={activeIcon === 'activity' || router.pathname == "/activity-tracking" ? styles.active : ''}>
                        <Link className={styles.link} href="/activity-tracking"> 
                            <img className={`${styles.activityIcon} ${styles.icons}`} 
                                src={activeIcon === 'activity' || router.pathname == "/activity-tracking" ? "/images/activity-active-icon.png" : "/images/activity-icon.png"}  
                                alt="Activity Icon" 
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li className={styles.navBarIcons}>
                        <div className={styles.circleBehindPlus}></div>
                        <Link className={styles.link} href="/new-prompt"> 
                            <img className={`${styles.plusIcon}`} src="/images/plusicon1.png"
                                alt="Create Post Icon" 
                                width="60" 
                                height="60"/>
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('chat')} className={activeIcon === 'chat' ? styles.active : ''}>
                        <Link className={styles.link} href="/community-page"> 
                            <img className={`${styles.chatIcon} ${styles.icons}`} 
                                src={activeIcon === 'chat' || router.pathname == "/community-page" ? "/images/chat-active-icon.png" : "/images/chat-icon.png"}  
                                alt="Chat Icon" 
                                width="25" height="25"/> 
                        </Link>
                    </li>
                    <li onClick ={() => handleIconClick('home')} className={activeIcon === 'home' ? styles.activeProfileIcon : ''}>
                        <Link className={styles.link} href="profile"> 
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