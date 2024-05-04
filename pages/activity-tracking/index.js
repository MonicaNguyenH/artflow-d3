import styles from "@/styles/ActivityTracking.module.css";
import React from 'react';
import GradientMeshTwo from "@/components/GradientMeshTwo";
import ActivityGraph from "@/components/ActivityGraph";
import NavBar from "@/components/NavBar";
import HeaderArea from "@/components/HeadArea";
import Link from "next/link";

const ActivityTracking = () => {
  // Get current date
  const currentDate = new Date();

  // Get current day of the week
  const currentDayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ...

  // Calculate the start date of the week
  const startDate = new Date(currentDate);
  startDate.setDate(startDate.getDate() - currentDayOfWeek);

  let daysOfWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const dayOfMonth = date.getDate();
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).substring(0, 2);


    const isCurrentDate = date.toDateString() === currentDate.toDateString();

   
    const classNames = [
      styles['calendar-day'],
      isCurrentDate ? styles['current-day'] : ''
    ].join(' ');

    // Push each day of the week to the array
    daysOfWeek.push(
      <div key={i} className={classNames}>
        <div className={styles['calendar-dayOfWeek']}>{dayOfWeek}</div>
        <div className={styles['calendar-date']}>{dayOfMonth}</div>
      </div>
    );
  }

  return (
    <>
      <HeaderArea title="Activity Tracker" description="Activity tracking with graph related to user activity contribution"/>
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headerElements}>
                <h1> Today </h1>
                <div className={styles.calendar}>
                    {daysOfWeek}
                </div>
                </div>
            </div>
            <div className={styles.body}>
                {/*Gradient Mesh card*/}
                    <div className={styles.graphCard}>
                        <div className={styles.BgCard1}>
                            <div className={styles.Shape1}>
                                <svg width="161" height="159" viewBox="0 0 161 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-0.749191 102.26C-31.6999 69.4683 12.147 25.5936 37.9392 7.75524C122.635 -36.6508 172.826 147.805 158.187 168.3C143.548 188.795 73.4908 199.043 88.1297 168.3C102.769 137.558 37.9392 143.251 -0.749191 102.26Z"
                                    fill="#910BEA" fillOpacity="1"/>
                                </svg> 
                            </div>
                            <div className={styles.Shape2}>
                                <svg width="201" height="183" viewBox="0 0 201 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M74.3147 93.0652C90.7619 56.7933 32.2177 30.8546 0.889648 22.4193C0.889648 3.86157 30.9123 -0.0749133 45.9237 0.276559C65.5037 15.0384 108.384 43.2967 123.265 38.2355C141.866 31.9091 192.774 62.4871 198.648 74.0857C204.522 85.6843 196.69 133.133 176.131 167.929C155.572 202.725 65.5037 166.874 56.6927 161.602C47.8817 156.33 53.7557 138.405 74.3147 93.0652Z"
                                    fill="#F94E9B" fillOpacity="1"/>
                                </svg> 
                            </div>
                            <div className={styles.Shape3}>
                                <svg width="280" height="229" viewBox="0 0 280 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M286.596 117.861C300.048 85.694 270.155 10.102 165.527 -5.98145C143.107 -1.15642 100.658 10.7453 110.224 19.752C122.181 31.0104 217.841 150.028 211.862 156.461C205.884 162.894 7.09076 156.461 1.11203 175.761C-4.8667 195.061 113.213 252.961 189.442 248.136C265.671 243.311 273.144 150.028 286.596 117.861Z"
                                    fill="#4A10D1" fillOpacity="1"/>
                                </svg> 
                            </div>
                            <div className={styles.Shape4}>
                                <svg width="284" height="229" viewBox="0 0 284 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M300.232 111.279C314.328 77.5732 283.004 -1.63438 173.372 -18.4871C149.88 -13.4313 105.4 -0.960276 115.424 8.47722C127.953 20.2741 228.188 144.984 221.924 151.725C215.659 158.466 7.35787 151.725 1.09319 171.948C-5.1715 192.171 118.556 252.841 198.431 247.785C278.306 242.729 286.137 144.984 300.232 111.279Z"
                                    fill="#4A10D1" fillOpacity="0.7"/>
                                </svg> 
                            </div>
                            <div className={styles.Shape5}>
                                <svg width="210" height="192" viewBox="0 0 210 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M77.558 97.2589C94.7919 59.2521 33.4475 32.0728 0.621094 23.234C0.621094 3.78868 32.0798 -0.336084 47.8091 0.0321992C68.3256 15.5001 113.257 45.11 128.849 39.8068C148.34 33.1777 201.683 65.2183 207.838 77.3716C213.993 89.5249 205.786 139.243 184.244 175.703C162.702 212.163 68.3256 174.598 59.0932 169.074C49.8607 163.55 56.0157 144.767 77.558 97.2589Z"
                                    fill="#F94E9B" fillOpacity="0.7"/>
                                </svg> 
                            </div>
                            <div className={styles.Shape6}>
                                <svg width="160" height="167" viewBox="0 0 160 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-10.0223 106.281C-42.4534 71.9204 3.49071 25.9472 30.5166 7.25569C119.264 -39.2743 171.855 154.004 156.516 175.479C141.177 196.955 67.7686 207.693 83.1076 175.479C98.4467 143.266 30.5166 149.232 -10.0223 106.281Z"
                                    fill="#910BEA" fillOpacity="0.7"/>
                                </svg> 
                            </div>
                            {/*Gradient Mesh card*/}
                            <div className={styles.graphElements}>
                                <h1>67%</h1>
                                <p>Art gallery visitors are suggested to have 
                                    <br/>
                                    <span> better mental health </span>
                                </p>
                                <Link href="/health-graph">
                                    <button> Learn more 
                                        <svg className={styles.NextArrow} width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.999884L6.10526 5.28852L1 9.57715"
                                            stroke="#FFFFFC" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/*Gradient Mesh card*/}
                    </div>
                    <div className={styles.activityContributes}>
                        <h2>Activity Tracker</h2>
                        <div className={styles.activityGraph}>
                            <ActivityGraph/>
                        </div>
                        <div className={styles.streaks}>
                            <h2>Streaks</h2>
                            <div className={styles.streakCard}>
                                <div className={styles.Shape7}>
                                    <svg width="200" height="100" viewBox="0 0 289 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M66.1708 289.322C14.1685 305.915 -53.6486 201.259 -56.6696 106.607C-59.6147 14.3347 -12.723 53.4317 97.288 -13.4082C77.7156 18.8355 303.117 -44.6026 287.235 -8.38232C271.354 27.8379 171.129 136.337 148.417 169.761C125.705 203.186 118.173 272.728 66.1708 289.322Z"
                                        fill="#F94E9B" fillOpacity="0.8"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape8}>
                                    <svg width="205" height="143" viewBox="0 0 305 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.1563 44.8902C54.7954 -37.0624 79.6285 17.0825 188.956 29.7478C179.236 38.852 173.588 56.3346 228.762 53.4316C297.73 49.8029 281.13 97.5031 295.738 147.349C310.346 197.195 313.488 237.348 258.183 269.296C202.878 301.244 198.929 274.155 144.16 238.275C89.3913 202.394 86.2669 222.679 33.6667 170.462C-18.9334 118.244 1.51722 126.843 28.1563 44.8902Z"
                                        fill="#910BEA" fillOpacity="0.8"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape9}>
                                    <svg width="245" height="111" viewBox="0 0 345 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M290.803 247.193C392.678 212.915 337.576 183.457 235.7 27.599C180.598 -1.32319 77.4405 -16.3199 19.1344 27.599C-39.1718 71.5178 54.3744 147.037 54.3744 208.095C54.3744 269.153 188.927 281.471 290.803 247.193Z"
                                        fill="#910BEA" fillOpacity="0.8"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape10}>
                                    <svg width="211" height="96" viewBox="0 0 281 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M236.857 140.659C319.834 112.695 274.953 88.6637 191.976 -38.4839C147.096 -62.0783 63.0749 -74.3125 15.5849 -38.4839C-31.905 -2.65541 44.2876 58.9522 44.2876 108.763C44.2876 158.573 153.88 168.622 236.857 140.659Z"
                                        fill="#F94E9B" fillOpacity="0.6"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape11}>
                                    <svg width="189" height="192" viewBox="0 0 289 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M66.1708 289.322C14.1685 305.916 -53.6486 201.259 -56.6696 106.607C-59.6147 14.335 -12.723 53.432 97.288 -13.4079C77.7156 18.8359 303.117 -44.6023 287.235 -8.38201C271.354 27.8382 171.129 136.337 148.417 169.762C125.705 203.186 118.173 272.728 66.1708 289.322Z"
                                        fill="#F94E9B" fillOpacity="0.7"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape12}>
                                    <svg width="205" height="160" viewBox="0 0 305 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.4439 20.8292C54.083 -61.1233 78.9161 -6.97838 188.244 5.68687C178.523 14.791 172.875 32.2736 228.05 29.3707C297.018 25.7419 280.418 73.4422 295.026 123.288C309.633 173.134 312.775 213.287 257.47 245.235C202.165 277.183 198.216 250.095 143.448 214.214C88.6789 178.333 85.5545 198.618 32.9543 146.401C-19.6458 94.1835 0.804814 102.782 27.4439 20.8292Z"
                                        fill="#910BEA" fillOpacity="0.6"/>
                                    </svg> 
                                </div>
                                <div className={styles.streakText}>
                                    <h2>4 days</h2>
                                    <p>Your current streak</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.entries}>
                            <h2>Entries</h2>
                            <div className={styles.entriesCard}>
                                <div className={styles.Shape7}>
                                    <svg width="200" height="100" viewBox="0 0 289 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M66.1708 289.322C14.1685 305.915 -53.6486 201.259 -56.6696 106.607C-59.6147 14.3347 -12.723 53.4317 97.288 -13.4082C77.7156 18.8355 303.117 -44.6026 287.235 -8.38232C271.354 27.8379 171.129 136.337 148.417 169.761C125.705 203.186 118.173 272.728 66.1708 289.322Z"
                                        fill="#F94E9B" fillOpacity="0.8"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape8}>
                                    <svg width="205" height="143" viewBox="0 0 305 243" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.1563 44.8902C54.7954 -37.0624 79.6285 17.0825 188.956 29.7478C179.236 38.852 173.588 56.3346 228.762 53.4316C297.73 49.8029 281.13 97.5031 295.738 147.349C310.346 197.195 313.488 237.348 258.183 269.296C202.878 301.244 198.929 274.155 144.16 238.275C89.3913 202.394 86.2669 222.679 33.6667 170.462C-18.9334 118.244 1.51722 126.843 28.1563 44.8902Z"
                                        fill="#910BEA" fillOpacity="0.8"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape9}>
                                    <svg width="245" height="111" viewBox="0 0 345 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M290.803 247.193C392.678 212.915 337.576 183.457 235.7 27.599C180.598 -1.32319 77.4405 -16.3199 19.1344 27.599C-39.1718 71.5178 54.3744 147.037 54.3744 208.095C54.3744 269.153 188.927 281.471 290.803 247.193Z"
                                        fill="#910BEA" fillOpacity="0.8"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape10}>
                                    <svg width="211" height="96" viewBox="0 0 281 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M236.857 140.659C319.834 112.695 274.953 88.6637 191.976 -38.4839C147.096 -62.0783 63.0749 -74.3125 15.5849 -38.4839C-31.905 -2.65541 44.2876 58.9522 44.2876 108.763C44.2876 158.573 153.88 168.622 236.857 140.659Z"
                                        fill="#F94E9B" fillOpacity="0.6"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape11}>
                                    <svg width="189" height="192" viewBox="0 0 289 292" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M66.1708 289.322C14.1685 305.916 -53.6486 201.259 -56.6696 106.607C-59.6147 14.335 -12.723 53.432 97.288 -13.4079C77.7156 18.8359 303.117 -44.6023 287.235 -8.38201C271.354 27.8382 171.129 136.337 148.417 169.762C125.705 203.186 118.173 272.728 66.1708 289.322Z"
                                        fill="#F94E9B" fillOpacity="0.7"/>
                                    </svg> 
                                </div>
                                <div className={styles.Shape12}>
                                    <svg width="205" height="160" viewBox="0 0 305 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.4439 20.8292C54.083 -61.1233 78.9161 -6.97838 188.244 5.68687C178.523 14.791 172.875 32.2736 228.05 29.3707C297.018 25.7419 280.418 73.4422 295.026 123.288C309.633 173.134 312.775 213.287 257.47 245.235C202.165 277.183 198.216 250.095 143.448 214.214C88.6789 178.333 85.5545 198.618 32.9543 146.401C-19.6458 94.1835 0.804814 102.782 27.4439 20.8292Z"
                                        fill="#910BEA" fillOpacity="0.6"/>
                                    </svg> 
                                </div>
                                <div className={styles.entriesText}>
                                    <h2>0 entry</h2>
                                    <p>Your current entry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <div className={styles.footer}>
                <NavBar/>
            </div>
        </div>
    </>
  );
};

export default ActivityTracking;
