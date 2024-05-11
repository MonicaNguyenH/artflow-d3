import styles from "@/styles/Settings.module.css";
import Link from 'next/link';
import { useState } from "react";
import { useSession } from "next-auth/react";
import SignOutOverlay from "@/components/SignOutOverlay";
import HeaderArea from "@/components/HeadArea";

export default function Settings() {
    const { data: session } = useSession();
    const [signOut, setSignOut] = useState(false);
    const handleCancel = () => {
        setSignOut(false);
    }
    const [lightMode, setLightMode] = useState(false);

    const toggleLightMode = () => {
        setLightMode(!lightMode);
    };

    return (
        <>
            <HeaderArea title="Setting page" description="Setting page"/>
            <div className={`${styles.main} ${lightMode ? styles['light-theme'] : styles['main']}`}>
                <SignOutOverlay promptActiveProp={signOut} onCancel={handleCancel} />  
                <div className={`${styles.header} ${lightMode ? styles['light-theme-header'] : styles['header']}`}>
                    <Link className={styles.link} href="/profile" tabIndex={1}>
                        <img className={styles.backButton} 
                        src={lightMode ? "/images/Settings/back-button-black.svg" : "/images/Settings/back-button.svg" }  
                        width="23" height="30" alt="Back Button"></img> 
                    </Link>
                    <div className={styles.heading}>
                     <p>Settings</p>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={`${styles.profileEdit} ${styles.link} ${lightMode ? styles['light-theme-profile-edit'] : styles['profileEdit']}`}
                        href="/edit-profile" tabIndex={2}>
                            <img src={session?.user.image ? session?.user.image : "/images/dog-profile-img.jpeg"}  width="50" height="50" alt="Profile Icon" />
                        
                            <div className={styles.name}>
                                <h2>{session?.user.name ? session?.user.name : "Dog Smith"}</h2>
                                <p>@{session?.user.email ? session?.user.email.split('@')[0] : "dogsmith123"}</p>
                            </div>
                            <img 
                            src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg" } 
                            width="18" height="13" alt="Next Arrow Icon" />
                    </div>  

                    <div className={`${styles.customization} ${lightMode ? styles['light-theme-customization'] : styles['customization']}`}>
                        <ul>
                            <li> <h3>CUSTOMIZATION</h3></li>
                            <li className={styles.customizationContainer}>
                                <div className={styles.customizationLanguage} tabIndex={3}>
                                    <img src="/images/Settings/language.svg" width="20" height="20" alt="Languages Icon"></img>
                                    <p>Languages</p>
                                    <img src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"} width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                <div className={styles.customizationNofications} tabIndex={4}>
                                    <img src="/images/Settings/nofications.svg" width="20" height="20" alt="Nofications Icon"></img>
                                    <p>Nofications</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                <div className={styles.customizationLightMode} tabIndex={5}>
                                    <img src="/images/Settings/light-mode.svg" width="20" height="20" alt="Light Mode Icon"></img>
                                    <p>Light Mode</p>
                                    <label className={styles.switch}>
                                        <input type="checkbox" checked={lightMode} onChange={toggleLightMode} />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.privacySecurity} ${lightMode ? styles['light-theme-privacy-security'] : styles['customization']}`}>
                        <ul>
                            <li><h3>PRIVACY & SECURITY</h3></li>
                            <li>
                                <div className={styles.privacySecurityPasscode} tabIndex={6}>
                                    <img src="/images/Settings/passcode.svg" width="20" height="20" alt="Passcode Icon"></img>
                                    <p>Passcode</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                <div className={styles.privacySecurityPreferences} tabIndex={7}>
                                    <img src="/images/Settings/preferences.svg" width="20" height="20" alt="Preferences Icon"></img>
                                    <p>Preferences</p>
                                    <img 
                                    src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                     width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                 <div className={styles.privacySecurityParentalControl} tabIndex={8}>
                                    <img src="/images/Settings/parental-control.svg" width="20" height="20" alt="Parental Control Icon"></img>
                                    <p>Parental Control</p>
                                    <img 
                                    src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                     width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className={`${styles.accessibility} ${lightMode ? styles['light-theme-accessibility'] : styles['accessibility']}`}>
                        <ul>
                            <li><h3>ACCESSIBILITY</h3></li>
                            <li>
                                <div className={styles.accessibilityCaption} tabIndex={9}>
                                    <img src="/images/Settings/caption.svg" width="20" height="20" alt="Caption Icon"></img>
                                    <p>Caption</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                <div className={styles.accessibilityWCAG} tabIndex={10}>
                                    <img src="/images/Settings/WCAG.svg" width="20" height="20" alt="WCAG Icon"></img>
                                    <p>WCAG</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                 <div className={styles.accessibilityKeyboardAccessibility} tabIndex={11}>
                                    <img src="/images/Settings/keyboard-accessibility.svg" width="20" height="20" alt="keyboard Icon"></img>
                                    <p>Keyboard Accessibility</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                 <div className={styles.accessibilityTextSizing} tabIndex={12}>
                                    <img src="/images/Settings/text-sizing.svg" width="20" height="20" alt="Text Sizing Icon"></img>
                                    <p>Text Sizing</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={`${styles.about} ${lightMode ? styles['light-theme-about'] : styles['about']}`}>
                        <ul>
                            <li><h3>ABOUT</h3></li>
                            <li>
                                <div className={styles.aboutContentPolicy} tabIndex={13}>
                                    <img src="/images/Settings/content-policy.svg" width="20" height="20" alt="Content Policy Icon"></img>
                                    <p>Content Policy</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                <div className={styles.aboutPrivacyPolicy} tabIndex={14}>
                                    <img src="/images/Settings/privacy-policy.svg" width="20" height="20" alt="Privacy Content Icon"></img>
                                    <p>Privacy Policy</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            <li>
                                 <div className={styles.aboutUserAgreement} tabIndex={15}>
                                    <img src="/images/Settings/user-agreement.svg" width="20" height="20" alt="User Agreement Icon"></img>
                                    <p>User Agreement</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.support} ${lightMode ? styles['light-theme-support'] : styles['support']}`}>
                    <ul>
                            <li><h3>SUPPORT</h3></li>
                            <li>
                                <Link href="/our-team" className={styles.hyperlink} tabIndex={16}>
                                    <div className={styles.supportHelpCenter}>
                                        <img src="/images/Settings/help-center.svg" width="20" height="20" alt="Help Center Icon"></img>
                                        <p className={styles.ourTeam}>Our Team</p>
                                        <img 
                                            src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                            width="18" height="13" alt="Next Arrow Icon" />
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className={styles.supportReport} tabIndex={17}>
                                    <img src="/images/Settings/report.svg" width="20" height="20" alt="Report Icon"></img>
                                    <p>Report an issue</p>
                                    <img 
                                        src={lightMode ? "/images/Settings/next-button-black.svg" : "/images/next-arrow.svg"}
                                        width="18" height="13" alt="Next Arrow Icon" />
                                </div>
                            </li>
                            
                            <li>
                            <div className={styles.signOut} tabIndex={18}>
                                 <button onClick={() => {setSignOut(!signOut)}} className={styles.supportSignOut}>
                                    <img 
                                        src={lightMode ? "/images/Settings/sign-out-black.svg" : "/images/Settings/sign-out.svg"}
                                        width="20" height="20" alt="Sign Out Icon"></img>
                                    <p>Sign out</p>
                                </button>
                            </div>
                            </li>
                            <li>
                                 <div className={styles.supportDeleteAccount} tabIndex={20}>
                                    <img src="/images/Settings/delete-account.svg" width="20" height="20" alt="Delete Account Icon"></img>
                                    <p>Delete account</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

