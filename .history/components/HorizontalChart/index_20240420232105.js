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
                    backgroundColor: '#F94E9B',
                    barThickness: 20
                },
                {
                    label: 'Non-visitors',
                    data:[58,31,37,38,58],
                    backgroundColor: '#4CC9F0',
                    barThickness: 20
                }
            ]
        })
        
        setChartOptions({
            indexAxis: 'x',
            plugins: {
                Legend: {
                    position: 'top'
                },
                title: {
                    dispaly: true,
                    text: "Daily Revenue"
                },
                maintainAspectRatio: true,
                reponsive: true
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#FFFFFC',
                        maxRotation: 0, // Set the maximum rotation angle to 0 degrees
                        autoSkip: true, // Automatically skip labels if they overlap
                        maxTicksLimit: 5, // Limit the maximum number of ticks displayed on the axis
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    ticks: {
                        color: '#FFFFFC'
                    }
                }
            }
        })
    }, [])
    
    return(
        <>
            <div>
                <Bar data={chartData} options={chartOptions} style={{ width: "800px", height: "500px"}}/>
            </div>
        </>
    )
}