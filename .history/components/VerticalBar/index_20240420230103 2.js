import styles from './VerticalBar.module.css';
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function VerticalBar(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})
    
    useEffect(() => {
        setChartData({
            labels: ["Mental Health", "Volunteer", "Trapped in Routine", "Stress", "Life Satisfaction"],
            datasets: [
                {
                    label: 'Art gallery visitors',
                    data:[67,50,30,37,62],
                    backgroundColor: '#F94E9B'
                },
                {
                    label: 'Non-visitors',
                    data:[58,31,37,38,58],
                    backgroundColor: '#4CC9F0'
                }
            ]
        })
        
        setChartOptions({
            indexAxis: 'x',
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#FFFFFC'
                    }
                },
                title: {
                    display: true,
                    text: "Health, well-being, and social connections of art gallery visitors",
                    color: '#FFFFFC'
                },
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    x: {
                        ticks: {
                            color: 'white',
                            font: {
                                size: 40,
                            },
                        },
                        gird: {
                            display: false
                        }
                    },
                    y: {
                        ticks: {
                            color: '#FFFFFC',
                            stepSize: 20,
                            beginAtZero: true
                        }
                    },
                    grid: {
                        display: true,
                        color: 'white',
                        lineWidth: 0.5,
                        drawBorder: false
                    }
                }
            }
        })
    }, [])
    
    return(
        <>
        <div className={styles.graphContainer}>
            <Bar data={chartData} options={chartOptions} className={styles.verticalBAr} legend={{ labels: { className: styles.legendLabels } }}/>
        </div>
        </>
    )
}