// GradientMesh.js
import React from 'react';
import styles from './GradientMesh.module.css';

const GradientMesh = () => {
  return (
    <div className={styles.gradientMesh}>
        <div className={styles.backgrou}>
            <div  className={styles.grainyContainer}>
                <svg width="430" height="100vh" viewBox="0 0 430 950" fill="none" fillOpacity="0.4" xmlns="http://www.w3.org/2000/svg">
                    <filter id="grainy">
                        <feTurbulence 
                            type="turbulence"
                            baseFrequency={1}
                        />
                    </filter>
                    <path d="M430 0H0V932H430V0Z" fill="#ffffff" filter="url(#grainy)"/> 
                </svg>
            </div>
            <div className={styles.Shape1}>
                <svg width="305" height="260" viewBox="0 0 305 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M277.556 239.17C250.917 321.123 226.084 266.978 116.756 254.313C126.477 245.209 132.125 227.726 76.9501 230.629C7.98198 234.258 24.582 186.557 9.97431 136.712C-4.63341 86.8658 -7.77549 46.7121 47.5296 14.7642C102.835 -17.1838 106.784 9.90511 161.552 45.7859C216.321 81.6667 219.446 61.3814 272.046 113.599C324.646 165.816 304.195 157.218 277.556 239.17Z"
                    fill="#910BEA" fillOpacity="0.5"/>
                </svg> 
            </div>
            <div className={styles.Shape2}>
                <svg width="163" height="284" viewBox="0 0 163 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M134.844 239.11C108.205 321.062 83.3715 266.917 -25.9564 254.252C-16.2356 245.148 -10.5877 227.665 -65.7623 230.568C-134.73 234.197 -118.13 186.497 -132.738 136.651C-147.346 86.8052 -150.488 46.6516 -95.1828 14.7036C-39.8777 -17.2443 -35.9289 9.84456 18.8399 45.7254C73.6087 81.6062 76.7331 61.3209 129.333 113.538C181.933 165.756 161.483 157.157 134.844 239.11Z"
                    fill="#910BEA" fillOpacity="0.6"/>
                </svg>
            </div>
            <div className={styles.Shape3}>
                <svg width="345" height="266" viewBox="0 0 345 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.1974 18.8068C-47.6782 53.0849 7.42429 82.5427 109.3 238.401C164.402 267.323 267.559 282.32 325.866 238.401C384.172 194.482 290.626 118.963 290.626 57.9053C290.626 -3.15265 156.073 -15.4713 54.1974 18.8068Z"
                    fill="#910BEA" fillOpacity="0.5"/>
                </svg> 
            </div>
            <div className={styles.Shape4}>
                <svg width="99" height="156" viewBox="0 0 99 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-137.857 15.3412C-220.834 43.3049 -175.953 67.3362 -92.9762 194.484C-48.0956 218.078 35.9251 230.312 83.4151 194.484C130.905 158.655 54.7124 97.0477 54.7124 47.2373C54.7124 -2.57312 -54.8798 -12.6226 -137.857 15.3412Z"
                    fill="#F94E9B" fillOpacity="0.6"/>
                </svg> 
            </div>
            <div className={styles.Shape5}>
                <svg width="289" height="292" viewBox="0 0 289 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M222.829 2.67809C274.831 -13.9156 342.649 90.7405 345.67 185.393C348.615 277.665 301.723 238.568 191.712 305.408C211.284 273.164 -14.1166 336.602 1.76481 300.382C17.6462 264.162 117.871 155.663 140.583 122.238C163.295 88.814 170.827 19.2718 222.829 2.67809Z"
                    fill="#F94E9B" fillOpacity="0.5"/>
                </svg> 
            </div>
            <div className={styles.Shape6}>
                <svg width="305" height="260" viewBox="0 0 305 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M277.556 239.171C250.917 321.123 226.084 266.979 116.756 254.313C126.477 245.209 132.125 227.726 76.9502 230.629C7.98201 234.258 24.5821 186.558 9.97434 136.712C-4.63338 86.8663 -7.77546 46.7126 47.5296 14.7647C102.835 -17.1833 106.784 9.90559 161.552 45.7864C216.321 81.6672 219.446 61.3819 272.046 113.599C324.646 165.817 304.195 157.218 277.556 239.171Z"
                    fill="#910BEA" fillOpacity="0.6"/>
                </svg> 
            </div>
            <div className={styles.Shape7}>
                <svg width="163" height="284" viewBox="0 0 163 284" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M134.844 239.11C108.205 321.063 83.3715 266.918 -25.9564 254.253C-16.2356 245.149 -10.5877 227.666 -65.7623 230.569C-134.73 234.198 -118.13 186.497 -132.738 136.652C-147.346 86.8057 -150.488 46.6521 -95.1828 14.7041C-39.8777 -17.2438 -35.9289 9.84505 18.8399 45.7259C73.6087 81.6066 76.7331 61.3214 129.333 113.539C181.933 165.756 161.483 157.158 134.844 239.11Z"
                    fill="#910BEA" fillOpacity="0.5"/>
                </svg> 
            </div>
            <div className={styles.Shape8}>
                <svg width="345" height="266" viewBox="0 0 345 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.1974 18.8073C-47.6782 53.0854 7.42432 82.5432 109.3 238.402C164.402 267.324 267.56 282.32 325.866 238.402C384.172 194.483 290.626 118.964 290.626 57.9057C290.626 -3.15216 156.073 -15.4709 54.1974 18.8073Z" 
                    fill="#910BEA" fillOpacity="0.6"/>
                </svg> 
            </div>
            <div className={styles.Shape9}>
                <svg width="99" height="156" viewBox="0 0 99 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-137.857 15.3416C-220.834 43.3054 -175.953 67.3367 -92.9762 194.484C-48.0956 218.079 35.9251 230.313 83.4151 194.484C130.905 158.656 54.7124 97.0482 54.7124 47.2378C54.7124 -2.57263 -54.8798 -12.6221 -137.857 15.3416Z"
                    fill="#F94E9B" fillOpacity="0.5"/>
                </svg> 
            </div>
            <div className={styles.Shape10}>
                <svg width="289" height="292" viewBox="0 0 289 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M222.829 2.67858C274.831 -13.9151 342.649 90.741 345.67 185.394C348.615 277.666 301.723 238.569 191.712 305.408C211.284 273.165 -14.1166 336.603 1.76484 300.382C17.6462 264.162 117.871 155.664 140.583 122.239C163.295 88.8144 170.827 19.2723 222.829 2.67858Z"
                    fill="#F94E9B" fillOpacity="0.6"/>
                </svg> 
            </div>
        </div>
    </div> 
  );
}

export default GradientMesh;
