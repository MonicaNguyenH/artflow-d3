import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/PromptPage.module.css"
import PromptDesc from "@/components/PromptDesc";
import NavBar from "@/components/NavBar";
import { useState,useEffect } from "react";
import Link from "next/link";
import HeaderArea from "@/components/HeadArea";

export default function Home() {

  const [drawingPrompt, setDrawingPrompt] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem('Prompt'));
    const prompt = localStorage.getItem('Prompt').trim().split('%');
    console.log(prompt);
    setDrawingPrompt(prompt);
  }, [])
  
  return (
    <>
      <HeaderArea title="Prompt Page" description="Prompt desceription page"/>
    </>
  )
}