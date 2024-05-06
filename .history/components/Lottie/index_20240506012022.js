import React, { useRef, useEffect } from 'react';

export default function LottieArtflow() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg', // Choose renderer: svg, canvas, html
      loop: true,
      autoplay: true,
      path: '/lottie/artflow_logo_lottie.json' 
    });
  }, []);

  return <div ref={lottieContainer}></div>;
};

