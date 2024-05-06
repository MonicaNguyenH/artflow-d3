import React, { useRef, useEffect } from 'react';

export default function LottieArtflow() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg', // Choose renderer: svg, canvas, html
      loop: true,
      autoplay: true,
      path: '/lottie/artflow_logo_lottie.json' 
    });
  }, []);

  return <div ref={animationContainer}></div>;
};

