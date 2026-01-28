import React from 'react'

const TopRepair = () => {
  return (
    <div className="bg-[#0F172B]/50 p-6 rounded-2xl border border-[#2B7FFF]/20">
      <p className="text-white text-xl mb-4">Top Repair Requests</p>
      <div className="bg-gradient-to-br from-[#0B1437] to-[#111B3C] p-6 rounded-xl space-y-8 text-white">

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Screen Repair</h3>
          <span className="text-[#C0CCDD] text-sm">156 requests</span>
        </div>
        <div className="w-full h-3 bg-[#1E2A4A] rounded-full overflow-hidden">
          <div className="h-full w-[75%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Battery Replacement</h3>
          <span className="text-[#C0CCDD] text-sm">89 requests</span>
        </div>
        <div className="w-full h-3 bg-[#1E2A4A] rounded-full overflow-hidden">
          <div className="h-full w-[45%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Back Glass Repair</h3>
          <span className="text-[#C0CCDD] text-sm">67 requests</span>
        </div>
        <div className="w-full h-3 bg-[#1E2A4A] rounded-full overflow-hidden">
          <div className="h-full w-[30%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium">Software Issues</h3>
          <span className="text-[#C0CCDD] text-sm">45 requests</span>
        </div>
        <div className="w-full h-3 bg-[#1E2A4A] rounded-full overflow-hidden">
          <div className="h-full w-[20%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default TopRepair
