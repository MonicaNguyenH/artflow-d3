import styles from '@/styles/Editname.module.css';
import Link from 'next/link';
import { useSession } from "next-auth/react";

export default function Editname() {
    const { data: session } = useSession();
    return (
        <>
            <nav className={styles.nav}>
            <Link href="/edit-profile">
                <img alt="arrow" src='./images/back-arrow.png' width={40} height={50} tabIndex={1}/>
            </Link>
            <p>Name</p>
            <Link href="/edit-profile" className={styles.done} tabIndex={2}>
                <p>Done</p>
            </Link>
            </nav>
            <main className={styles.main}>
                <div className={styles.input}>
                        <label  className={styles.label}>Name</label>
                        <input tabIndex={3} placeholder={session?.user.name ? session?.user.name : "Dog Smith"} type="text" className={styles.name}/>
                    </div>
                    <p className={styles.text}>
                        Help people discover your account by using the name you’re known by: either your full name, nickname or business name.
                    </p>
                    <p className={styles.text2}>
                        You can only change your name twice within 14 days.
                    </p>
            </main>
        </>
    )
}