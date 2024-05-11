import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/router";
import styles from "@/styles/DrawingPage.module.css";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import HeaderArea from '@/components/HeadArea';

const drawingstyles = {
  // border: "0.0625rem solid #9c9c9c",
  // borderRadius: "0.25rem",
  height: "85%",
  width: "100%",  
};

export default function DrawingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const canvasRef = useRef(null);
  const [tool, setTool] = useState("");
  const [strokeWidth, setStrokeWidth] = useState(5);
  const [brushStrokeWidth, setBrushStrokeWidth] = useState(15);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [strokeSelection, setStrokeSelection] = useState(false);
  const [paramsValue, setParamsValue] = useState({});
  const sliderRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.type != "range" && event.target.id != "strokeWidth") {
        setStrokeSelection(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sliderRef]);

  useEffect(() => {
    // Convert searchParams to an object
    const params = Object.fromEntries(searchParams);
    // Setting the state to have the object that carried over from the last page(s)
    setParamsValue(params);
  }, [searchParams]);

  if(tool == "") {
    drawingstyles.pointerEvents = "none";
  } else {
    drawingstyles.pointerEvents = "auto";
  }

  const handleStrokeColorChange = (event) => {
    setStrokeColor(event.target.value);
  };

  const handleStrokeWidthChange = (event) => {
    let width = event.target.value;
    if(tool == "brush") {
      setBrushStrokeWidth(+width);
    } else {
      setStrokeWidth(+width);
    }
  };

  const handleEraserClick = () => {
    setTool("eraser");
    canvasRef.current?.eraseMode(true);
  };

  const handlePenClick = () => {
    setStrokeWidth(5);
    setTool("pen");
    canvasRef.current?.eraseMode(false);
  };

  const handleBrushClick = () => {
    setTool("brush");
    setBrushStrokeWidth(15);
    canvasRef.current?.eraseMode(false);
  };

  const handleClearClick = () => {
    canvasRef.current?.resetCanvas();
  };

  const handleUndoClick = () => {
    canvasRef.current?.undo();
  };

  const handleRedoClick = () => {
    canvasRef.current?.redo();
  };

  const handleSaveDrawing = async () => {
    const exportData = await canvasRef.current?.exportImage("png");
    localStorage.setItem('Drawing', exportData);
    const downloadImage = document.createElement("a");
    downloadImage.href = exportData;
    downloadImage.download = "ArtFlow-Export";
    downloadImage.click();
  }

  const handleSubmitDrawing = async () => {
    const exportData = await canvasRef.current?.exportImage("png");
    localStorage.setItem('CurrentDrawing', canvasRef.current?.exportPaths());
    localStorage.setItem('Drawing', exportData);
    router.push('/submit-prompt');
  }

  return (
    <>
      <HeaderArea title="Drawing page" description="Drawing page"/>
      <div className={styles.parent}>
        <input className={styles.colorPicker} id='color' type="color" onChange={handleStrokeColorChange} />
        <div className={styles.drawingNav}>
          <div>
            <Link href={paramsValue.homePage ? "/home-page" : "/prompt-page"}>
              <button>
                <Image src="/images/back-arrow.png" width={100} height={100} alt="back arrow" tabIndex={1}/>
              </button>
            </Link>
            <button onClick={handleUndoClick}>
              <Image src="/images/undo.png" width={100} height={100} alt="undo" tabIndex={2}/>
            </button>
            <button onClick={handleRedoClick}>
              <Image src="/images/redo.png" width={100} height={100} alt="redo" tabIndex={3}/>
            </button>
            <button onClick={handleClearClick}>
              <Image src="/images/clear.png" width={100} height={100} alt="clear canvas" tabIndex={4}/>
            </button>
          </div>
          <div>          
            <label className={styles.strokeWidth} htmlFor="strokeWidth" onClick={() => {setStrokeSelection(!strokeSelection)}}>
              <Image id='strokeWidth' src="/images/strokewidth.png" width={100} height={100} alt="stroke width" tabIndex={5}/>
            </label>
            {strokeSelection &&
            <input
              type="range"
              className={styles.strokeWidthSlider}
              min={tool == "brush" ? "15" : "5"}
              max={tool == "brush" || tool == "eraser" ? "80" : "20"}
              step="1"
              id="strokeWidth"
              value={tool == "brush" ? brushStrokeWidth : strokeWidth}
              onChange={handleStrokeWidthChange}              
            />}
            <label htmlFor='color'>
              <Image src="/images/colourtool.png" width={100} height={100} alt="colour picker" tabIndex={5}/>     
            </label>
          </div>
        </div>
        <ReactSketchCanvas style={drawingstyles} width="600" height="400" ref={canvasRef} strokeWidth={tool == "brush" ? brushStrokeWidth : strokeWidth} eraserWidth={strokeWidth} strokeColor={strokeColor} backgroundImage="/images/drawingbg.png" canvasColor="#fff" />
        <div className={styles.bottom}>
          <div className={styles.tools}>
            <button className={tool == "pen" && styles.selected} onClick={handlePenClick}>
              <Image src={tool == "pen" ? "/images/Penselected.svg" : "/images/Pen.svg"} width={800} height={800} alt="pen tool"/>
            </button>
            <button className={tool == "brush" && styles.selected} onClick={handleBrushClick}>
              <Image src={tool == "brush" ? "/images/Brushselected.svg" : "/images/Brush.svg"} className={styles.brush} width={800} height={800} alt="brush tool"/>
            </button>
            <button className={tool == "eraser" && styles.selected} onClick={handleEraserClick}>
              <Image src={tool == "eraser" ? "/images/Eraserselected.svg" : "/images/Eraser.svg"} className={styles.eraser} width={800} height={800} alt="eraser tool"/>
            </button>          
          </div>
          <div className={styles.utils}>
          <button>
              <Image src="/images/camera.png" width={100} height={100} alt="camera icon" />
            </button>   
            <button onClick={handleSaveDrawing}>
              <Image src="/images/save.png" width={100} height={100} alt="save icon" />
            </button>  
            <button onClick={handleSubmitDrawing}>
              <Image src="/images/check.png" width={100} height={100} alt="submit icon" />
            </button>    
          </div>
        </div>
      </div>
    </>
  )
}