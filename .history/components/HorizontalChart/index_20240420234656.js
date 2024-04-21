import styles from './HorizontalChart.module.css';
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

export default function HorizontalChart(){
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
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: false,
                    text: "Health, well-being, and social connections of art gallery visitors",
                    color: '#FFFFFC'
                },
                maintainAspectRatio: true
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#FFFFFC',
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    ticks: {
                        color: '#FFFFFC',
                        font: {
                            size: 10
                        }
                    }
                }
            }
        })
    }, [])
    
    return(
        <>
            <div className={styles.graphContainer}>
                <Bar data={chartData} options={chartOptions} style={{ width: "350px", height: "500px"}}/>
            </div>
        </>
    )
}