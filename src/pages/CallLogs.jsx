import React from "react";

import Search from "../components/call list/Search";
import CallList from "../components/call list/CallList";
import CallDetails from "../components/call list/CallDetails";

const CallLogs = () => {
  return (
    <div className="space-y-6">
      <Search />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CallList />

        <CallDetails />
      </div>
    </div>
  );
};

export default CallLogs;
