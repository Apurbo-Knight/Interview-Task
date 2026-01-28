import React, { useState } from "react";
import { useLocation, NavLink, Link } from "react-router";
import avatar from "../../assets/Avatar.png";
import not from "../../assets/not.png";
import home from "../../assets/Icon.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pageTitles = {
    "/": "Dashboard Overview",
    "/calls": "Call Logs",
    "/appointments": "Appointments",
    "/settings": "Settings",
    "/settings/profile": "Update Profile",
    "/settings/password": "Update Password",
  };

  const title = pageTitles[location.pathname] || "My App";

  return (
    <header className="bg-[#111B3C] flex flex-col md:flex-row justify-between items-start md:items-center py-2 px-4 md:px-6 shadow-md">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          
        <h1 className="text-xl md:text-2xl text-white font-semibold">
          {title}
        </h1>
        </div>

        <div className="flex items-center gap-4">
          <img className="w-8 h-8" src={not} alt="Notifications" />
          <img
            className="w-12 md:w-16 border-2 border-[#1443ef] rounded-full"
            src={avatar}
            alt="Avatar"
          />
          <button
            className="md:hidden text-white text-2xl ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/*  navigation links */}
      <nav
        className={`w-full flex flex-col gap-2 mt-2 md:hidden bg-[#111B3C] transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white px-3 py-2 rounded ${
              isActive ? "bg-[#2b7FFF]/10 " : "font-normal"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Dashboard Overview
        </NavLink>

        <NavLink
          to="/calls"
          className={({ isActive }) =>
            `text-white px-3 py-2 rounded ${
              isActive ? "bg-[#2b7FFF]/10 " : "font-normal"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Call Logs
        </NavLink>

        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            `text-white px-3 py-2 rounded ${
              isActive ? "bg-[#2b7FFF]/10 " : "font-normal"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Appointments
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `text-white px-3 py-2 rounded ${
              isActive ? "bg-[#2b7FFF]/10 " : "font-normal"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          Settings
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
