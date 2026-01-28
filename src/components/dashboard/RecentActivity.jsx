import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-[#0F172B]/50 p-6 rounded-2xl border border-[#2B7FFF]/20">
      <p className="text-white text-xl mb-4">Recent Activity</p>
      <div className="space-y-3">
        <div className="flex items-start gap-2 bg-[#1D293D] rounded-xl p-3 sm:p-5">
          <div className="w-2 h-2 rounded-full bg-[#05DF72]"></div>
          <div className="space-y-2">
            <p className="text-sm text-white leading-3 sm:leading-2">
              AI booked appointment for iPhone 13 screen repair
            </p>
            <p className="text-xs text-[#7A8BA4]">2 min ago</p>
          </div>
        </div>
        <div className="flex items-start gap-2 bg-[#1D293D] rounded-xl p-3 sm:p-5">
          <div className="w-2 h-2 rounded-full bg-[#FF8904]"></div>
          <div className="space-y-2">
            <p className="text-sm text-white leading-3 sm:leading-2">
              Warm transfer to technician - Software issue
            </p>
            <p className="text-xs text-[#7A8BA4]">5 min ago</p>
          </div>
        </div>
        <div className="flex items-start gap-2 bg-[#1D293D] rounded-xl p-3 sm:p-5">
          <div className="w-2 h-2 rounded-full bg-[#05DF72]"></div>
          <div className="space-y-2">
            <p className="text-sm text-white leading-3 sm:leading-2">
             Quote provided for iPad battery replacement
            </p>
            <p className="text-xs text-[#7A8BA4]">8 min ago</p>
          </div>
        </div>
        <div className="flex items-start gap-2 bg-[#1D293D] rounded-xl p-3 sm:p-5">
          <div className="w-2 h-2 rounded-full bg-[#FF6467]"></div>
          <div className="space-y-2">
            <p className="text-sm text-white leading-3 sm:leading-2">
              Call dropped after 12 seconds
            </p>
            <p className="text-xs text-[#7A8BA4]">15 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
