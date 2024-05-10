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
            <p>Celestial Symphony</p>
        </nav>
        <div className={styles.container}>

        </div>
        <div className={styles.footer}>
            <NavBar/>
        </div>
    </main>
</>
    )

}