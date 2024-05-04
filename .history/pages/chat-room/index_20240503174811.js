import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/ChatRoom.module.css";
import HeaderArea from "@/components/HeadArea";


export default function HealthGraph() {
    
  return (
    <>
      <HeaderArea title="Health Graph" description="Graph related to health benefit received by going to art gallery"/>
      <main className={styles.main}>
        
      </main>
    </>
  );
}
