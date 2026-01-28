import React from "react";
import drop from '../../assets/drop.png'
import graph from '../../assets/graph.png'


const Graph = () => {
  return (
    <div className="p-6 bg-[#111B3C] rounded-2xl border border-[#2B7FFF]/20 space-y-6">
      <div className="flex justify-between">
        <div>
          <p className="text-white text-[20px]">Call Trends - This Week</p>
          <p className="text-[#90A1B9] text-sm">Total: 472 calls</p>
        </div>
        <div className="flex justify-between items-center gap-2 px-2 py-0 sm:px-5 sm:py-2.5 bg-[#1D293D] border border-[#2b7FFF]/20 rounded-lg">
          <p className="text-white text-sm">This Week</p>
          <img className="w-4 h-4" src={drop} alt="" />
        </div>
      </div>
      <div>
        <img src={graph} alt="" />
      </div>
    </div>
  );
};

export default Graph;
