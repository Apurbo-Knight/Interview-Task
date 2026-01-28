import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='bg-[#111B3C] overflow-clip'>
      <div className="flex max-w-360 mx-auto">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6 min-h-[calc(100vh)] bg-linear-to-tl from-[#111B3C] via-[#162456] to-[#111B3C]">
          <Outlet />
        </main>
      </div>
    </div>
    </div>
  )
}

export default Layout
