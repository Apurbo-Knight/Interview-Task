import React from 'react'

import Cards from '../components/dashboard/Cards'
import Graph from '../components/dashboard/Graph'
import RecentActivity from '../components/dashboard/RecentActivity'
import TopRepair from '../components/dashboard/TopRepair'

const Dashboard = () => {
  return (
    <div className='space-y-6'>
      <Cards/>
      <Graph/>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
      <RecentActivity/>
      <TopRepair/>
      </div>
    </div>
  )
}

export default Dashboard
