import ThemeCards from "@/components/ThemeCards"
import NavBar from "@/components/NavBar"
import PromptDesc from "@/components/PromptDesc"
import UserCard from "@/components/UserCard"
import styles from "/styles/Homepage.module.css"

export default function Homepage() {
    return (
        <>
        <div className={styles.user}>
            <UserCard />
        </div>
       <div className={styles.cards}>
        <ThemeCards />
        </div>
        <div className={styles.prompt}>
            <PromptDesc />
        </div>
        <div className={styles.bar}>
        <NavBar />
       </div>
       </>
    )
}