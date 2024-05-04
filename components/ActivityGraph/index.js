import styles from './ActivityGraph.module.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function ActivityGraph() {
    const [activityData, setActivityData] = useState({
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                label: 'Posts',
                data: [0, 0, 0, 3, 2, 1, 1],
                borderColor: 'rgba(249, 78, 155, 1)',
                backgroundColor: 'rgba(237, 63, 179, 1)',
                borderWidth: '1',
                borderRadius: 5,
                barThickness: 10
            }
        ]
    });

    const [chartOptions, setChartOptions] = useState({
        plugins: {
            legend: {
                position:'top'
            },
            title: {
                display: true
                
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // Color of X axis labels
                    font: {
                        size: 14, // Font size of X axis labels
                    },
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 14, 
                    },
                    callback: function(value, index, values) {
                        return Math.round(value);
                    }
                },
                grid: {
                    display: true, 
                    color: 'rgba(84, 84, 88, 1)',
                    lineWidth: 0.5,
                    drawBorder: false 
                }
            }
        }
    });

    return (
        <>
            <div>
                <Bar data={activityData} options={chartOptions} width={335} height={200}/>
            </div>
        </>
    );
}
