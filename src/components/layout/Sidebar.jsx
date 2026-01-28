import React from "react";
import { Link, NavLink } from "react-router";
import home from "../../assets/Icon.png";

const Sidebar = () => {
  return (
    <div className="w-64 max-w-60 min-h-[calc(100vh+96px)] p-2 bg-[#111B3C] border-r border-r-[#2b7FFF]/20 hidden md:block">
      <Link to='/'>
        <div className="w-14 h-14 mt-6 mb-12 mx-auto flex justify-center items-center bg-linear-to-b from-[#00FF88] to-[#00D4FF] rounded-xl">
          <img className="w-8" src={home} alt="" />
        </div>
      </Link>
      <nav className="flex flex-col text-[16px] text-white space-y-2">
        <NavLink to="/" end>
          Dashboard Overview
        </NavLink>
        <NavLink to="/calls">Call Logs</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
