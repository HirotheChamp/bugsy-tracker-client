import React, { useEffect, useState } from 'react'
import {Chart as ChartJS, BarElement, LinearScale, CategoryScale} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import axios from 'axios'
Chart.register(...registerables);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart=()=> {
const [chartData, setChartData] = useState({})
const [bugPriority, setBugPriority] = useState({})
const [bugAmount, setBugAmount] = useState({})


const chart = () => {
    let bugPriority = [];
    let bugAmount = [];
    axios.get("http://localhost:8000/api/bug/")
    .then(res=>{
        console.log(res)
        for (const dataObj of res.data){
            bugPriority.push(parseInt(dataObj.priority))
            bugAmount.push(parseInt(dataObj.bug_amount))
        }
    })
    .catch(err =>{
        console.log(err)
    })
    console.log(bugPriority, bugAmount)
}

    useEffect(()=>{
     
        chart()
    }, [])

   var data = {
        labels: ['Low', 'Medium', 'High', 'Mandatory'],
        datasets: [{
            label: "Priorities",
            data: bugPriority,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
   var options = {
       maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend:{
            labels: {
                fontSize: 30
            }
        }
    }
  return (
    <div>
        <Bar
        data ={data}
        height={400}
        options={options}

        
        />
    </div>
  )
}

export default BarChart