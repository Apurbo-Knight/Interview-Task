import React from "react";

const Search = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-between gap-2">
      <div className="max-w-138 w-full">
        <input
          className="w-full  bg-[#111B3D] text-white border border-[#2b7FFF]/20 rounded-lg px-4 py-2 focus:outline-none"
          type="text"
          placeholder="🔍   Search by phone number, issue type..."
        />
      </div>
      <div className="flex gap-1 md:gap-6">
        <select className=" bg-[#111B3D] text-white border border-[#2b7FFF]/20 rounded-lg px-4 py-2 focus:outline-none">
          <option value="">All Type</option>
        </select>
        <select className=" bg-[#111B3D] text-white border border-[#2b7FFF]/20 rounded-lg px-4 py-2 focus:outline-none">
          <option value="">All Issues</option>
        </select>
        <select className=" bg-[#111B3D] text-white border border-[#2b7FFF]/20 rounded-lg px-4 py-2 focus:outline-none">
          <option value="">Today</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
