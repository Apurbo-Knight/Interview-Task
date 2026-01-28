import React from "react";
import { Link, NavLink } from "react-router";
import home from "../../assets/Icon.png";
import house from "../../assets/home.png";
import date from "../../assets/date.png";
import phone from "../../assets/tele.png";
import setting from "../../assets/setting.png";

const Sidebar = () => {
  return (
    <div className="w-64 max-w-60 min-h-[calc(100vh+96px)] p-2 bg-[#111B3C] border-r border-r-[#2b7FFF]/20 hidden md:block">
      <Link to="/">
        <div className="w-14 h-14 mt-6 mb-12 mx-auto flex justify-center items-center bg-linear-to-b from-[#00FF88] to-[#00D4FF] rounded-xl">
          <img className="w-8" src={home} alt="" />
        </div>
      </Link>
      <nav className="flex flex-col text-[16px] text-white space-y-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "rounded-xl py-1 px-2  text-white shadow-[inset_0_6px_6px_rgba(224,242,254,0.35),inset_0_-6px_6px_rgba(224,242,254,0.35)] drop-shadow-lg drop-shadow-blue-200" : "text-white"
          }
        >
          <div className="flex items-center gap-2">
            <img className="w-6" src={house} alt="" />
            <p>Dashboard Overview</p>
          </div>
        </NavLink>
        <NavLink
          to="/calls"
          className={({ isActive }) =>
            isActive ? "rounded-xl py-1 px-2  text-white shadow-[inset_0_6px_6px_rgba(224,242,254,0.35),inset_0_-6px_6px_rgba(224,242,254,0.35)] drop-shadow-lg drop-shadow-blue-200" : "text-white"
          }
        >
          <div className="flex items-center gap-2">
            <img className="w-6" src={phone} alt="" />
            <p>Call Logs</p>
          </div>
        </NavLink>
        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            isActive ? "rounded-xl py-1 px-2  text-white shadow-[inset_0_6px_6px_rgba(224,242,254,0.35),inset_0_-6px_6px_rgba(224,242,254,0.35)] drop-shadow-lg drop-shadow-blue-200" : "text-white"
          }
        >
          <div className="flex items-center gap-2">
            <img className="w-6" src={date} alt="" />
            <p>Appointments</p>
          </div>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "rounded-xl py-1 px-2 text-white shadow-[inset_0_6px_6px_rgba(224,242,254,0.25),inset_0_-6px_6px_rgba(224,242,254,0.25)] drop-shadow-lg drop-shadow-blue-200" : "text-white"
          }
        >
          <div className="flex items-center gap-2">
            <img className="w-6" src={setting} alt="" />
            <p>Settings</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
