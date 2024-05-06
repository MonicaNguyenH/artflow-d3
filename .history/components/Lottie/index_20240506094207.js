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
      path: '/lottie/artflow_logo_lottie.json' 
    });
  }, []);

  return (
    <>
        <div ref={lottieContainer}></div>;
    </>
  )
};

