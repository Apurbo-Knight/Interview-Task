import React from 'react'
import phone from "../../assets/phone.png";
import time from "../../assets/time.png";
import tick from "../../assets/tick.png";

const CallList = () => {
  return (
    <div className="bg-[#0F172B]/50 p-4 md:p-6 rounded-2xl border border-[#2B7FFF]/20">
          <p className="text-white text-xl mb-4">Call List</p>
          <div className="space-y-4 border-b-2 my-4 border-b-[#2B7FFF]">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <div>
                  <img className="w-10 h-10" src={phone} alt="" />
                </div>
                <div>
                  <p className="text-white text-sm mb-1">+1 (555) 345-6789</p>

                  <p className="text-[#90A1B9] text-xs">
                    2025-12-16 • 09:42 AM
                  </p>
                </div>
              </div>
              <div className="bg-[#00C950]/20 border border-[#00C950]/30 rounded-lg py-1  px-3">
                <p className="text-[#05DF72] text-xs">AI Resolved</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#90A1B9] text-sm mb-2">
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={time} alt="" /> <p>5:23</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={tick} alt="" />{" "}
                <p>Quote Provided</p>
              </div>

              <p className="px-2 py-1 bg-[#2B7FFF]/20 text-[#51A2FF] rounded-sm">
                Screen
              </p>
            </div>
          </div>
          <div className="space-y-4 border-b my-4 border-b-[#2B7FFF]/10">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <div>
                  <img className="w-10 h-10" src={phone} alt="" />
                </div>
                <div>
                  <p className="text-white text-sm mb-1">+1 (555) 345-6789</p>

                  <p className="text-[#90A1B9] text-xs">
                    2025-12-16 • 09:42 AM
                  </p>
                </div>
              </div>
              <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg py-1 px-3">
                <p className="text-amber-500 text-xs">Warm Transfer</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#90A1B9] text-sm mb-2">
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={time} alt="" /> <p>5:23</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={tick} alt="" />{" "}
                <p>Escalated to technician</p>
              </div>

              <p className="px-2 py-1 bg-[#2B7FFF]/20 text-[#51A2FF] rounded-sm">
                Software
              </p>
            </div>
          </div>
          <div className="space-y-4 border-b my-4 border-b-[#2B7FFF]/10">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <div>
                  <img className="w-10 h-10" src={phone} alt="" />
                </div>
                <div>
                  <p className="text-white text-sm mb-1">+1 (555) 345-6789</p>

                  <p className="text-[#90A1B9] text-xs">
                    2025-12-16 • 09:42 AM
                  </p>
                </div>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg py-1  px-3">
                <p className="text-blue-500 text-xs">Appointment</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#90A1B9] text-sm mb-2">
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={time} alt="" /> <p>5:23</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={tick} alt="" />{" "}
                <p>Appointment Booked</p>
              </div>

              <p className="px-2 py-1 bg-[#2B7FFF]/20 text-[#51A2FF] rounded-sm">
                Battery
              </p>
            </div>
          </div>
          <div className="space-y-4 border-b my-4 border-b-[#2B7FFF]/10">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <div>
                  <img className="w-10 h-10" src={phone} alt="" />
                </div>
                <div>
                  <p className="text-white text-sm mb-1">+1 (555) 345-6789</p>

                  <p className="text-[#90A1B9] text-xs">
                    2025-12-16 • 09:42 AM
                  </p>
                </div>
              </div>
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg py-1  px-3">
                <p className="text-red-500 text-xs">Dropped</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#90A1B9] text-sm mb-2">
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={time} alt="" /> <p>5:23</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={tick} alt="" />{" "}
                <p>Call Dropped</p>
              </div>

              <p className="px-2 py-1 bg-[#2B7FFF]/20 text-[#51A2FF] rounded-sm">
                Unknown
              </p>
            </div>
          </div>
          <div className="space-y-4 border-b border-b-[#2B7FFF]/10">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <div>
                  <img className="w-10 h-10" src={phone} alt="" />
                </div>
                <div>
                  <p className="text-white text-sm mb-1">+1 (555) 345-6789</p>

                  <p className="text-[#90A1B9] text-xs">
                    2025-12-16 • 09:42 AM
                  </p>
                </div>
              </div>
              <div className="bg-[#00C950]/20 border border-[#00C950]/30 rounded-lg px-3 py-1 ">
                <p className="text-[#05DF72] text-xs">AI Resolved</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#90A1B9] text-sm mb-2">
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={time} alt="" /> <p>5:23</p>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={tick} alt="" />{" "}
                <p>Quote Provided</p>
              </div>

              <p className="px-2 py-1 bg-[#2B7FFF]/20 text-[#51A2FF] rounded-sm">
                Screen
              </p>
            </div>
          </div>
        </div>
  )
}

export default CallList
