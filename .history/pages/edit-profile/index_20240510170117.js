import styles from '@/styles/Editprofile.module.css';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import { useState } from 'react';
import SignOutOverlay from '@/components/SignOutOverlay';
import HeaderArea from '@/components/HeadArea';

export default function Editprofile() {
    const { data: session } = useSession();
    const [signOut, setSignOut] = useState(false);
    const handleCancel = () => {
        setSignOut(false);
    }

    return (
        <main className={styles.main}>
            <HeaderArea title="ArtFlow" description="The drawing prompt app"/>
            <SignOutOverlay promptActiveProp={signOut} onCancel={handleCancel} />        
            <nav className={styles.nav}>
                <Link href="/profile">
                    <img alt="back arrow" src='./images/back-arrow.png' width={40} height={50} tabIndex={1}/>
                </Link>
                <p>Edit Profile</p>
            </nav>
            <div className={styles.container}>
                <div className={styles.pfp}>
                    <p>Profile Picture</p>
                    <img className={styles.pfpImg} alt="profile image" src={session?.user.image ? session?.user.image : "/images/dogpfp.jpg"} width={100} height={100}/>
                    <img className={styles.camera} alt="camera icon" src='./images/camera-icon.png' width={100} height={100} tabIndex={2}/>
                </div>
                <hr className={styles.line}/>
                <div className={styles.coverpic}>
                    <p>Cover Picture</p>
                    <div className={styles.imgContainer}>
                        <img className={styles.cover} alt="banner image" src='./images/dog-profile-banner.png' width={550} height={320}/>
                    </div>
                    <img className={styles.camera2} alt="camera icon" src='./images/camera-icon.png' width={100} height={100} tabIndex={3}/>
                </div>
                <div className={styles.dataContainer}>
                    <div className={styles.userData} tabIndex={4}>
                        <p className={styles.boldText}>Name</p>
                        <Link href="/edit-name">
                        <div className={styles.innerDiv}>
                            <p>{session?.user.name ? session?.user.name : "Dog Smith"}</p>
                            <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                        </div>
                        </Link>
                    </div>
                    <div className={styles.userData} tabIndex={5}>
                        <p className={styles.boldText}>Username</p>
                        <div className={styles.innerDiv}>
                            <p>{session?.user.email ? session?.user.email.split('@')[0] : "dogsmith123"}</p>
                            <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                        </div>
                    </div>
                    <div className={styles.userData} tabIndex={6}>
                        <p className={styles.boldText}>Pronouns</p>
                        <div className={styles.innerDiv}>
                            <p className={styles.greyText}>Pronouns</p>
                            <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                        </div>
                    </div>
                    <div className={styles.userData} tabIndex={7}>
                        <p className={styles.boldText}>Bio</p>
                        <div className={styles.innerDiv}>
                            <p className={styles.bioText}>🌟 Creating magic through art and creativity ✨</p>
                            <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                        </div>
                    </div>
                    <div className={styles.userData} tabIndex={8}>
                        <p className={styles.boldText}>Add links</p>
                        <div className={styles.innerDiv}>
                            <p className={styles.greyText}>Add links</p>
                            <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.signOut}>
                        <button onClick={() => {setSignOut(!signOut)}} tabIndex={9}>Sign Out</button>
                    </div>
                </div>
            </div>
        </main>
    )
}