import styles from '@/styles/Celestialsymphonypage.module.css';
import Link from 'next/link';

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
        <p className={styles.Title}>Celestial <br/> Symphony</p>
        <div className={styles.titlePic}>
            <img src="/images/celestial.jpg" width={430} height={250}/>
            <div className={styles.overlay}></div>
        </div>
        <div className={styles.container}>
            <div><img src="/images/image1.jpg" width={110} height={110}/></div>
            <div><img src="/images/image2.jpg" width={110} height={110}/></div>
            <div><img src="/images/image3.jpg" width={110} height={110}/></div>
            <div><img src="/images/image4.jpg" width={110} height={110}/></div>
            <div><img src="/images/image5.jpg" width={110} height={110}/></div>
            <div><img src="/images/image6.jpg" width={110} height={110}/></div>
            <div><img src="/images/image7.jpg" width={110} height={110}/></div>
            <div><img src="/images/image8.jpg" width={110} height={110}/></div>
            <div><img src="/images/image9.jpg" width={110} height={110}/></div>
            <div><img src="/images/image10.jpg" width={110} height={110}/></div>
            <div><img src="/images/image11.jpg" width={110} height={110}/></div>
            <div><img src="/images/image12.jpg" width={110} height={110}/></div>
            <div><img src="/images/image13.jpg" width={110} height={110}/></div>
            <div><img src="/images/image14.jpg" width={110} height={110}/></div>
        </div>
    </main>
</>
    )

}