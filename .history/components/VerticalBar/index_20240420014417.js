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
                    borderColor: 'rgb(53, 162, 235 )',
                    backgroundColor: 'rgba(53, 12, 235, 0.4)'
                },
                {
                    label: 'Non-visitors',
                    data:[58,31,37,38,58],
                    borderColor: 'rgb(33, 162, 25 )',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                }
            ]
        })
        
        setChartOptions({
            plugins: {
                Legend: {
                    position: 'top'
                },
                title: {
                    dispaly: true,
                    text: "Health, well-being, and social connections of art gallery visitors"
                },
                maintainAspectRatio: false,
                reponsive: true
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