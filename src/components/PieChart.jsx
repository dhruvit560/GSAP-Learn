import React, { useState, Component } from 'react'

import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// interface ApexChartProps {}

// interface TravelDetailsViewProps {
//   options?: any;
//   series?: any;
// }
const PieChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      //   legend: {
      //     formatter: function (val, opts) {
      //       return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
      //     },
      //   },
      title: {
        text: '',
      },
      fill: {
        colors: ['#F44336', '#E91E63', '#9C27B0', '#E91E63', '#9C27B0'],
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  })
  // var chart = new ApexCharts(document.querySelector('#chart'), options)

  // chart.render()

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="donut"
    />
  )
}

export default PieChart
