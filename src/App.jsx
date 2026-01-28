import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import CallLogs from "./pages/CallLogs";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import ProfileTab from "./components/settings/ProfileTab";
import UpdateProfile from "./components/settings/UpdateProfile";
import UpdatePass from "./components/settings/UpdatePass";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calls" element={<CallLogs />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/settings" element={<Settings />}>
           
            <Route index element={<ProfileTab />} /> 
            <Route path="profile" element={<UpdateProfile />} />
            <Route path="password" element={<UpdatePass />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
