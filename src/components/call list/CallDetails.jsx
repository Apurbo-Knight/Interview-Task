import React from "react";
import play from "../../assets/play.png";
import pdf from "../../assets/pdf.png";

const CallDetails = () => {
  return (
    <>
      <div className="bg-[#0F172B]/50 p-4 md:p-6 rounded-2xl border border-[#2B7FFF]/20">
        <p className="text-white text-xl mb-4">Call Details</p>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-[#90A1B9]">Phone Number</p>
              <p className="text-sm text-white">+1 (555) 123-4567</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-[#90A1B9]">Duration</p>
              <p className="text-sm text-white">4:32</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-[#90A1B9]">Date & Time</p>
              <p className="text-sm text-white">2025-12-16 10:45 AM</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-[#90A1B9]">Issue Type</p>
              <p className="text-sm text-white">Screen</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-[#90A1B9] mb-1">Call type</p>
            <div className="bg-[#00C950]/20 inline-block border border-[#00C950]/30 rounded-lg  px-3 py-1">
              <p className="text-[#05DF72] text-xs">AI Resolved</p>
            </div>
          </div>
          <div>
            <p className="text-xs text-[#90A1B9]">Call type</p>
            <p className="text-md text-white">Quote provided</p>
          </div>
          {/* play button */}
          <div className="flex justify-center items-center p-3 gap-1 border border-[#AD46FF]/30 bg-gradient-to-r from-[#AD46FF]/30 via-[#AD46FF]/20 to-[#C27AFF]/20 rounded-xl">
            <img className="w-4 h-4" src={play} alt="" />
            <p className="text-[#C27AFF]">Play Audio Recording</p>
          </div>

          {/* last part */}
          <div>
            <div className="flex gap-1 items-center mb-6">
              <img className="w-4 h-4" src={pdf} alt="" />
              <p className="text-md text-white">Conversation Transcript</p>
            </div>
            <div className="space-y-3 bg-[#1D293D] rounded-xl p-4">
              <div className="space-y-1">
                <p className="text-green-500">AI Assistant:</p>
                <p className="text-white text-xs">
                  Thank you for calling UBreakiFix! How can I help you today?
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-blue-500">Customer:</p>
                <p className="text-white text-xs">
                  Hi, my iPhone 13 screen is cracked. How much would it cost to
                  repair?
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-green-500">AI Assistant:</p>
                <p className="text-white text-xs">
                  I can help you with that! For an iPhone 13 screen repair, our
                  price is $199. This includes parts, labor, and comes with a
                  90-day warranty. Would you like to book an appointment?
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-blue-500">Customer:</p>
                <p className="text-white text-xs">
                  Yes, please! When are you available?
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-green-500">AI Assistant:</p>
                <p className="text-white text-xs">
                  Great! I have availability today at 2:00 PM or tomorrow at
                  10:00 AM. Which works better for you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallDetails;
