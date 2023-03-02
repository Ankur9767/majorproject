import {React ,useState ,useEffect ,useRef} from 'react'


import {Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';




import { Pie } from 'react-chartjs-2'



const LineChart = () => {
  return (
    <div>
      <Pie
        data={{
          labels: ['Happy', 'Fear', 'Anger', 'Sadness', 'Surprise', 'disgust'],
          datasets: [
            {
              label: '%',
              data: [30, 19, 13, 50, 20, 30],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 2,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        
        width={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 10,
            },
          },
        }}
      />
    </div>
  )
}

export default LineChart