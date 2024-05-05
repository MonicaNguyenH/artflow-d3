import styles from '@/styles/Editprofile.module.css';
import Link from 'next/link';
import { useSession } from "next-auth/react";

export default function Editprofile() {
    const { data: session } = useSession();
    return (
    <main className={styles.main}>
        <nav className={styles.nav}>
            <Link href="/profile">
                <img alt="arrow" src='./images/back-arrow.png' width={40} height={50}/>
            </Link>
            <p>Edit Profile</p>
        </nav>
        <div className={styles.container}>
            <div className={styles.pfp}>
                <p>Profile Picture</p>
                <img className={styles.pfpImg} alt="dog" src={session?.user.image ? session?.user.image : "/images/dogpfp.jpg"} width={100} height={100}/>
                <img className={styles.camera} alt="camera" src='./images/camera-icon.png' width={100} height={100}/>
            </div>
            <hr className={styles.line}/>
            <div className={styles.coverpic}>
                <p>Cover Picture</p>
                <div className={styles.imgContainer}>
                    <img className={styles.cover} alt="otherdog" src='./images/dog-profile-banner.png' width={550} height={320}/>
                </div>
                <img className={styles.camera2} alt="camera" src='./images/camera-icon.png' width={100} height={100}/>
            </div>
            <div className={styles.dataContainer}>
                <div className={styles.userData}>
                    <p className={styles.boldText}>Name</p>
                    <Link href="/edit-name">
                    <div className={styles.innerDiv}>
                        <p>{session?.user.name ? session?.user.name : "Dog Smith"}</p>
                        <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                    </div>
                    </Link>
                </div>
                <div className={styles.userData}>
                    <p className={styles.boldText}>Username</p>
                    <div className={styles.innerDiv}>
                        <p>{session?.user.email ? session?.user.email.split('@')[0] : "dogsmith123"}</p>
                        <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                    </div>
                </div>
                <div className={styles.userData}>
                    <p className={styles.boldText}>Pronouns</p>
                    <div className={styles.innerDiv}>
                        <p className={styles.greyText}>Pronouns</p>
                        <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                    </div>
                </div>
                <div className={styles.userData}>
                    <p className={styles.boldText}>Bio</p>
                    <div className={styles.innerDiv}>
                        <p className={styles.bioText}>🌟 Creating magic through art and creativity ✨</p>
                        <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                    </div>
                </div>
                <div className={styles.userData}>
                    <p className={styles.boldText}>Add links</p>
                    <div className={styles.innerDiv}>
                        <p className={styles.greyText}>Add links</p>
                        <img  alt="arrow" src='./images/edit-arrow.png' width={40} height={50}/>
                    </div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Link className={styles.signOut} href={{
                    pathname: '/',
                    query: {signOut: 'true'}
                    }}>
                    <button>Sign Out</button>
                </Link>
            </div>
        </div>
    </main>
    )
}