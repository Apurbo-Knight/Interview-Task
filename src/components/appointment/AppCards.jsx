import React from "react";
import calender from '../../assets/scalender.png'
import gtick from '../../assets/gtick.png'
import mistake from '../../assets/mistake.png'

const AppCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className=" flex justify-between bg-[#0F172B] p-6 rounded-2xl border border-[#2b7FFF]/20">
        <div>
          <div className="flex items-center gap-3">
            <img className="w-5 h-5" src={calender} alt="" />
            <p className="text-[#90A1B9] text-sm">Total Booked</p>
          </div>
          <p className="text-white text-3xl mt-2 mb-4">34</p>
          <p className="text-[#05DF72] text-sm">+8 this week</p>
        </div>
        
      </div>
      <div className="  flex justify-between bg-[#0F172B] p-6 rounded-2xl border border-[#2b7FFF]/20">
        <div>
          <div className="flex items-center gap-3">
            <img className="w-5 h-5" src={gtick} alt="" />
            <p className="text-[#90A1B9] text-sm">AI Booked</p>
          </div>
          <p className="text-white text-3xl mt-2 mb-4">28</p>
          <p className="text-[#90A1B9] text-sm">82% of total</p>
        </div>
        
      </div>
      <div className=" flex justify-between bg-[#0F172B] p-6 rounded-2xl border border-[#2b7FFF]/20">
        <div>
          <div className="flex items-center gap-3">
            <img className="w-5 h-5" src={mistake} alt="" />
            <p className="text-[#90A1B9] text-sm">Pending</p>
          </div>
          <p className="text-white text-3xl mt-2 mb-4">3</p>
          <p className="text-[#90A1B9] text-sm">Awaiting confirmation</p>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default AppCards;
