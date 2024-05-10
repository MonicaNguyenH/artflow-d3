import styles from '@/styles/OurTeam.module.css';
import Link from 'next/link';

export default function celestialSymphony() {
    return (
<>
    <main className={styles.main}>
        <nav className={styles.nav}>
            <Link href="/settings">          
                    <img alt="arrow" src='/images/back-arrow.png' width={40} height={50}/>
            </Link>
            <p className={styles.title}>Our Team</p>
        </nav>
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    <img alt="shirin" src='/images/Team/shirin.jpeg'  width={100} height={100}/>
                </div>
                <div className={styles.profileContent}>
                    <h1>Shirin Forouzan</h1>
                    <h2>Designer/Developer</h2>
                    <p>As an art history lover and casual artist/designer, Shirin came up with the Artflow concept to inspire artists to practice daily to beat their creativity block. Shirin also loves to play video games and play guitar in her free time.</p>
                </div>
            </div>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    <img alt="monica" src='/images/Team/monica.jpeg'  width={100} height={100}/>
                </div>
                <div className={styles.profileContent}>
                    <h1>Monica Nguyen</h1>
                    <h2>Designer/Developer</h2>
                    <p>As a tired designer and developer with a passion for good grades, Monica developed the ArtFlow app for creators to use art as a medium to relax and combat art block. Likes to eat, hate life sometimes.</p>
                </div>
            </div>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    <img alt="jumi" src='/images/Team/jumi.jpeg'  width={100} height={100}/>
                </div>
                <div className={styles.profileContent}>
                    <h1>Jumi Pham</h1>
                    <h2>Designer/Developer</h2>
                    <p>Jumi's passion for graphic design sparked during high school and has  since flourished through eight years of freelancing. Developing an app  tailored to her expertise presents an excellent opportunity to further  enhance her craft.</p>
                </div>
            </div>
            <div className={styles.profile}>
                <div className={styles.profileImg}>
                    <img alt="callista" src='/images/Team/callista.jpeg'  width={100} height={100}/>
                </div>
                <div className={styles.profileContent}>
                    <h1>Callista Chan</h1>
                    <h2>Designer/Developer</h2>
                    <p>As someone who likes to draw in her free time Callista liked the ArtFlow concept and thought that it would be a good way for artists to destress and get inspiration for art projects. Callista likes to sing and play piano and play video games.</p>
                </div>
            </div>
        </div>
    </main>
</>
    )

}