import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/HealthGraph.module.css";
import HorizontalChart from "@/components/HorizontalChart";
import NavBar from "@/components/NavBar";
import HeaderArea from "@/components/HeadArea";


export default function HealthGraph() {
    const router = useRouter();
    const handleIconClick = () => {
        router.push('/activity-tracking')
    }
 
  return (
    <>
      <HeaderArea title="Health Graph" description="Graph related to health benefit received by going to art gallery"/>
      <main className={styles.main}>
        <div className={styles.header}>
            <a href="/activity-tracking" onClick={handleIconClick}>
                <img className={styles.return} src="/images/return-icon.svg" alt="return icon" width="24.98" height="16.03"/>
            </a>
            <div className={styles.learnMore}>
                <p>Learn more</p>
            </div>
        </div>
        <div className={styles.graphCaption}>
            <p>Health, well-being, and social connections of art gallery visitors</p>
        </div>
        <div className={styles.chartContainer}>
            <HorizontalChart/>
        </div>
        <div className={styles.paragraphs}>
            <p className={styles.p1}>In 2010, 35.7% of Canadians aged 15 or older visited public art galleries or museums, total 10.0 million visitors.</p>
            <p className={styles.p2}>Art gallery visitors exhibit significant associations with positive social indicators:
                More likely to report excellent mental health (67% vs. 58%)
                More likely to volunteer (50% vs. 31%)
                Less likely to feel trapped in routine (30% vs. 37%)
                More likely to help neighbours (69% vs. 63%) </p>
            <p className={styles.p3}>These differences are statistically significant, while art gallery visitors show similar levels of stress (37% vs. 38%) compared to non-visitors.</p>
        </div>
        <div className={styles.footer}>
            <NavBar/>
        </div>
      </main>
    </>
  );
}
