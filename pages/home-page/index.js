import ThemeCards from "@/components/ThemeCards"
import NavBar from "@/components/NavBar"
import PromptDesc from "@/components/PromptDesc"
import UserCard from "@/components/UserCard"
import styles from "/styles/Homepage.module.css"
import ComProject from "@/components/ComProject"
import FeaturedPrompt from "@/components/FeaturedPrompt"
import HeaderArea from "@/components/HeadArea"

export default function Homepage() {
    return (
      <>
        <HeaderArea title="Home Page" description="Home page"/>
        <div className={styles.user}>
          <UserCard />
        </div>
        <div className={styles.cards}>
          <ThemeCards />
        </div>
        <div className={styles.prompt}>
          <FeaturedPrompt />
        </div>
        <div className={styles.bar}>
          <NavBar />
        </div>
      </>
    );
  }
