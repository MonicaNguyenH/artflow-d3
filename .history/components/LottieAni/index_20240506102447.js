import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import dynamic from "next/dynamic";

export default function LottieArtflow() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/artflow_logo_lottie 2.json' 
    });
  }, []);

  return (
    <>
        <lottie ref={lottieContainer}></lottie>
    </>
  )
};

