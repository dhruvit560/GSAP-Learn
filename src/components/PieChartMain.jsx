import React from 'react'

import dynamic from 'next/dynamic'

const PieChart = dynamic(() => import('../components/PieChart'), {
  ssr: false,
})
const PieChartMain = () => {
  return (
    <div>
      <PieChart />
    </div>
  )
}

export default PieChartMain
