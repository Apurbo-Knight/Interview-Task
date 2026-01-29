import React from "react";
import { Link, NavLink } from "react-router";
import home from "../../assets/Icon.png";
import house from "../../assets/home.png";
import date from "../../assets/date.png";
import phone from "../../assets/tele.png";
import setting from "../../assets/setting.png";
import out from "../../assets/out.png";

const Sidebar = () => {
  return (
    <div className="w-64 max-w-60 min-h-screen p-2 bg-[#111B3C] border-r border-r-[#2b7FFF]/20 hidden md:flex flex-col">
      <Link to="/">
        <div className="w-14 h-14 mt-6 mb-12 mx-auto flex justify-center items-center bg-linear-to-b from-[#00FF88] to-[#00D4FF] rounded-xl">
          <img className="w-8" src={home} alt="" />
        </div>
      </Link>

      <div className="flex flex-col flex-1">
        {/* Nav */}
        <nav className="flex flex-col text-[16px] text-white space-y-5 flex-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "rounded-xl py-1 px-2 shadow-[inset_0_6px_6px_rgba(224,242,254,0.35),inset_0_-6px_6px_rgba(224,242,254,0.35)] drop-shadow-lg"
                : "px-2"
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
              isActive
                ? "rounded-xl py-1 px-2 shadow-[inset_0_6px_6px_rgba(224,242,254,0.35),inset_0_-6px_6px_rgba(224,242,254,0.35)] drop-shadow-lg"
                : "px-2"
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
              isActive
                ? "rounded-xl py-1 px-2 shadow-[inset_0_6px_6px_rgba(224,242,254,0.35),inset_0_-6px_6px_rgba(224,242,254,0.35)] drop-shadow-lg"
                : "px-2"
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
              isActive
                ? "rounded-xl py-1 px-2 shadow-[inset_0_6px_6px_rgba(224,242,254,0.25),inset_0_-6px_6px_rgba(224,242,254,0.25)] drop-shadow-lg"
                : "px-2"
            }
          >
            <div className="flex items-center gap-2">
              <img className="w-6" src={setting} alt="" />
              <p>Settings</p>
            </div>
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 px-2 py-4 cursor-pointer hover:text-red-400 transition">
          <img className="w-8" src={out} alt="" />
          <p className="text-red-600 text-sm">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
