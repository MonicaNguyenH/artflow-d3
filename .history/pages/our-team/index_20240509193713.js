import styles from '@/styles/OurTeam.module.css';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function celestialSymphony() {
    return (
<>
    <main className={styles.main}>
        <nav className={styles.nav}>
            <Link href="/home-page">          
                    <img alt="arrow" src='/images/back-arrow.png' width={40} height={50}/>
            </Link>
            <p className={styles.title}>Our Team</p>
            <p className={styles.doneButton}>Done</p>
        </nav>
        <div className={styles.container}>
            <div className={styles.profile}>
                <img alt="arrow" src='/images/Team/shirin.png' width={100} height={100}/>
                <div className={styles.profileContent}>
                    <h1>Shirin Forouzan</h1>
                    <h2>Designer/Developer</h2>
                    <p>As an art history lover and casual artist/designer, Shirin came up with the Artflow concept to inspire artists to practice daily to beat their creativity block. Shirin also loves to play video games and play guitar in her free time</p>
                </div>
            </div>
        </div>
        <div className={styles.footer}>
            <NavBar/>
        </div>
    </main>
</>
    )

}