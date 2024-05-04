import styles from './VerticalBar.module.css';
import { Bar } from 'react-chartjs-2';
import styles from './VerticalBar.module.css'

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
                    backgroundColor: '#F94E9B',
                    color: '#FFFFFC'
                },
                {cod
                    label: 'Non-visitors',
                    data:[58,31,37,38,58],
                    backgroundColor: '#4CC9F0'
                }
            ]
        })
        
        setChartOptions({
            plugins: {
                Legend: {
                    position: 'top',
                    labels: {
                        color: '#FFFFFC'
                    }
                },
                title: {
                    dispaly: true,
                    text: "Health, well-being, and social connections of art gallery visitors",
                    color: '#FFFFFC'
                },
                maintainAspectRatio: false,
                reponsive: true,
                scales: {
                    x: {
                        ticks: {
                            color: '#FFFFFC', // Set x-axis label color to white
                        },
                    },
                    y: {
                        ticks: {
                            color: '#FFFFFC', // Set y-axis label color to white
                        },
                    }
                }
            }
        })
    }, [])
    
    return(
        <>
        <div className={styles.graphContainer}>
            <Bar data={chartData} options={chartOptions} className={styles.verticalBAr}/>
        </div>
        </>
    )
}