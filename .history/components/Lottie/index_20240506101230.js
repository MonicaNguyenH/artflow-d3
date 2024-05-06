import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

export default function LottieArtflow() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/lottie/artflow_logo_lottie 2.json' 
    });
  }, []);

  return (
    <>
        <lottie ref={lottieContainer}></lottie>;
    </>
  )
};

