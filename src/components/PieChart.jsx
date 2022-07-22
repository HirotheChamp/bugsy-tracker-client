import React from 'react'
import {Pie} from 'react-chartjs-2'

const PieChart = () => {
  return (
    <div>
      <Pie
        data={{
          // labels: props.chartLabels,
          datasets: [
            {
              // data: props.chartData,
              label: "Activity",
              borderColor: "#3333ff",
              fill: true,
              // backgroundColor: colorPicker.map(() => colorPicker[Math.round(Math.random() * 2)])
              // ,
            },
          ],
        }}
      /> 
    </div>
  )
}

export default PieChart