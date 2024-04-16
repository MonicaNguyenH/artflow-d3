// This Gradient Mesh will use for generating prompt page and prompt page

import React from 'react';
import styles from './GradientMeshTwo.module.css';

const GradientMeshTwo = () => {
    return (
    <div className={styles.BoundingBox}>
        <div className={styles.GradientMeshTwo}>
            <div className={styles.GradientShapeContainer1}>
                <div className={styles.GradientShape1}>
                    <svg width="324" height="942" viewBox="0 0 314 932" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M331.989 452.889C347.611 315.713 312.897 -6.65141 191.397 -75.2396C165.362 -54.6631 116.068 -3.90788 127.176 34.5015C141.062 82.5132 252.147 590.066 245.204 617.501C238.261 644.936 7.41235 617.501 0.469529 699.807C-6.4733 782.113 130.648 1029.03 219.169 1008.45C307.69 987.877 316.368 590.066 331.989 452.889Z" fill="#4A10D1" fill-opacity="0.6"/>
                    </svg>
                </div>

                <div className={styles.GradientShape2}>
                    <svg width="233" height="780" viewBox="0 0 233 780" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M85.6704 395.997C104.77 241.315 36.7851 130.699 0.405273 94.726C0.405273 15.586 35.2693 -1.20124 52.7012 0.297628C75.4386 63.2499 125.233 183.758 142.514 162.175C164.114 135.195 223.232 265.596 230.053 315.059C236.874 364.521 227.779 566.868 203.905 715.255C180.031 863.643 75.4386 710.759 65.2068 688.276C54.975 665.793 61.7962 589.351 85.6704 395.997Z" 
                        fill="#F94E9B" fill-opacity="0.8"/>
                    </svg> 
                </div>

                <div className={styles.GradientShape3}>
                    <svg width="177" height="680" viewBox="0 0 177 680" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-11.1068 432.882C-47.0485 293.039 3.8689 105.934 33.8203 29.8623C132.174 -159.509 190.458 627.109 173.459 714.511C156.459 801.913 75.1047 845.614 92.1042 714.511C109.104 583.408 33.8203 607.686 -11.1068 432.882Z"
                        fill="#910BEA" fill-opacity="0.8"/>
                    </svg> 
                </div>

                <div className={styles.GradientShapeContainer2}>
                    <div className={styles.GradientShape4}>
                        <svg width="310" height="932" viewBox="0 0 310 932" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M317.31 479.678C332.218 348.764 299.089 41.1138 183.135 -24.3436C158.288 -4.70635 111.244 43.7321 121.846 80.3882C135.098 126.208 241.112 610.593 234.486 636.776C227.86 662.959 7.5487 636.776 0.922792 715.325C-5.70312 793.874 125.159 1029.52 209.639 1009.88C294.119 990.246 302.402 610.593 317.31 479.678Z" 
                            fill="#4A10D1" fill-opacity="0.8"/>
                        </svg> 
                    </div>

                    <div className={styles.GradientShape5}>
                        <svg width="222" height="745" viewBox="0 0 222 745" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81.5084 378.628C99.7359 231.006 34.8544 125.439 0.135254 91.1086C0.135254 15.5811 33.4078 -0.439935 50.0441 0.990511C71.7436 61.0692 119.265 176.077 135.757 155.479C156.372 129.731 212.79 254.179 219.3 301.384C225.81 348.589 217.13 541.699 194.346 683.313C171.561 824.927 71.7436 679.022 61.9788 657.565C52.214 636.108 58.7239 563.156 81.5084 378.628Z" 
                            fill="#F94E9B" fill-opacity="0.8"/>
                        </svg> 
                    </div>

                    <div className={styles.GradientShape6}>
                        <svg width="179" height="644" viewBox="0 0 179 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-0.830259 413.077C-35.1313 279.618 13.4619 101.053 42.0461 28.4538C135.91 -152.273 191.534 598.438 175.31 681.851C159.087 765.263 81.446 806.969 97.6695 681.851C113.893 556.732 42.0461 579.902 -0.830259 413.077Z" 
                            fill="#910BEA" fill-opacity="0.8"/>
                        </svg> 
                    </div>

                    <div className={styles.grainyTexture}>
                        {/*Grainy*/}
                        <div>
                        <svg width="430" height="932" viewBox="0 0 430 932" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <filter id="grainy">
                            <feTurbulence 
                                type="turbulence"
                                baseFrequency={1}
                            />
                        </filter>
                        <path d="M430 0H0V932H430V0Z" fill="#ffffff" filter="url(#grainy)"/> 
                </svg>
                        </div>
                
                    </div>

                </div>

            </div>
        </div>  
    </div> 
    );
}

export default GradientMeshTwo;
