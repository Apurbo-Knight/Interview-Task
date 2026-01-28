import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

const Settings = () => {
  return (
    <div>
      <header className="flex gap-8 font-light mb-10 border-b border-b-[#192D71]">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            `text-2xl ${isActive ? "text-white  border-b-2 border-[#87A2FF]" : "text-gray-400"}`
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="password"
          className={({ isActive }) =>
            `text-2xl ${isActive ? "text-white  border-b-2 border-[#87A2FF]" : "text-gray-400"}`
          }
        >
          Password Setting
        </NavLink>
      </header>
      <Outlet/>
    </div>
  )
}

export default Settings
