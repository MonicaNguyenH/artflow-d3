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
            <div>
                <img alt="arrow" src='/Team/shirin.png' width={90} height={90}/>
            </div>
        </div>
        <div className={styles.footer}>
            <NavBar/>
        </div>
    </main>
</>
    )

}