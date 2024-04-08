// GradientMesh.js
import React from 'react';
import styles from './GradientMesh.module.css'; // Import the CSS module

const GradientMesh = () => {
  return (
    <div className={styles.gradientMesh}>
        <div  className={styles.grainyContainer}>
            <svg width="430" height="950" viewBox="0 0 430 950" fill="none" xmlns="http://www.w3.org/2000/svg">
                <filter id="grainy">
                    <feTurbulence 
                        type="turbulence"
                        baseFrequency={1}
                    />
                </filter>
                <path d="M430 0H0V932H430V0Z" fill="#ffffff" filter="url(#grainy)"/> 
            </svg>
        </div>
        <div className={styles.gradientShape}>
            {/*
            <div className={styles.Shape1}>
                <svg width="209" height="210" viewBox="0 0 209 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M222.829 2.67846C274.831 -13.9152 342.649 90.7409 345.67 185.394C348.615 277.665 301.723 238.568 191.712 305.408C211.284 273.165 -14.1166 336.603 1.76481 300.382C17.6462 264.162 117.871 155.663 140.583 122.239C163.295 88.8143 170.827 19.2721 222.829 2.67846Z"
                    fill="#F94E9B" fill-opacity="0.6"/>
                </svg> 
            </div>*/}

            
            <div className={styles.Shape2}>
            <svg width="305" height="226" viewBox="0 0 305 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M54.1974 18.8071C-47.6782 53.0853 7.42429 82.543 109.3 238.401C164.402 267.324 267.559 282.32 325.866 238.401C384.172 194.483 290.626 118.964 290.626 57.9056C290.626 -3.15228 156.073 -15.471 54.1974 18.8071Z"
                fill="#910BEA" fill-opacity="0.6"/>
                </svg>  
            </div>
            <div className={styles.Shape3}>
                <svg width="163" height="284" viewBox="0 0 163 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M134.844 239.11C108.205 321.063 83.3715 266.918 -25.9564 254.253C-16.2356 245.148 -10.5877 227.666 -65.7623 230.569C-134.73 234.198 -118.13 186.497 -132.738 136.651C-147.346 86.8056 -150.488 46.652 -95.1828 14.704C-39.8777 -17.244 -35.9289 9.84492 18.8399 45.7257C73.6087 81.6065 76.7331 61.3213 129.333 113.539C181.933 165.756 161.483 157.158 134.844 239.11Z"
                    fill="#910BEA" fill-opacity="0.6"/>
                </svg> 
            </div>
            <div className={styles.Shape4}>
                <svg width="300" height="260" viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M277.556 239.171C250.917 321.123 226.084 266.978 116.756 254.313C126.477 245.209 132.125 227.726 76.9501 230.629C7.98198 234.258 24.582 186.558 9.97431 136.712C-4.63341 86.8662 -7.77549 46.7125 47.5296 14.7645C102.835 -17.1834 106.784 9.90547 161.552 45.7863C216.321 81.6671 219.446 61.3818 272.046 113.599C324.646 165.817 304.195 157.218 277.556 239.171Z" 
                    fill="#910BEA" fill-opacity="0.6"/>
                </svg> 
            </div>
            <div className={styles.Shape5}>
                <svg width="289" height="292" viewBox="0 0 289 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M222.829 2.67809C274.831 -13.9156 342.649 90.7405 345.67 185.393C348.615 277.665 301.723 238.568 191.712 305.408C211.284 273.164 -14.1166 336.602 1.76481 300.382C17.6462 264.162 117.871 155.663 140.583 122.238C163.295 88.814 170.827 19.2718 222.829 2.67809Z"
                    fill="#F94E9B" fill-opacity="0.6"/>
                </svg> 
            </div>
            <div className={styles.Shape6}>
                <svg width="89" height="146" viewBox="0 0 99 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-137.857 15.3413C-220.834 43.305 -175.953 67.3363 -92.976 194.484C-48.0954 218.078 35.9253 230.312 83.4152 194.484C130.905 158.655 54.7125 97.0478 54.7125 47.2374C54.7125 -2.573 -54.8797 -12.6225 -137.857 15.3413Z" fill="#F94E9B" fill-opacity="0.6"/>
                </svg>
            </div>
            <div className={styles.Shape7}>
                <svg width="290" height="211" viewBox="0 0 300 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.1974 18.8068C-47.6782 53.0849 7.42429 82.5427 109.3 238.401C164.402 267.323 267.559 282.32 325.866 238.401C384.172 194.482 290.626 118.963 290.626 57.9053C290.626 -3.15265 156.073 -15.4713 54.1974 18.8068Z" fill="#910BEA" fill-opacity="0.6"/>
                </svg>
            </div>
            <div className={styles.Shape8}>
                <svg width="226" height="217" viewBox="0 0 226 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.1433 15.3426C-38.8336 43.3064 6.047 67.3377 89.024 194.485C133.905 218.08 217.925 230.314 265.415 194.485C312.905 158.657 236.712 97.0491 236.712 47.2388C236.712 -2.57166 127.12 -12.6211 44.1433 15.3426Z" fill="#F94E9B" fill-opacity="0.6"/>
                </svg> 
            </div>
            <div className={styles.Shape9}>
                <svg width="281" height="217" viewBox="0 0 281 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.1433 15.3424C-38.8336 43.3061 6.047 67.3374 89.024 194.485C133.905 218.079 217.925 230.314 265.415 194.485C312.905 158.657 236.712 97.0489 236.712 47.2385C236.712 -2.5719 127.12 -12.6214 44.1433 15.3424Z" fill="#F94E9B" fill-opacity="0.6"/>
                </svg>
            </div>
        </div>
    </div> // Apply CSS class
  );
}

export default GradientMesh;
