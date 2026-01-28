import React from "react";
import AppCards from "../components/appointment/AppCards";
import BookingLink from "../components/appointment/BookingLink";
import Table from "../components/appointment/Table";

const Appointments = () => {
  return (
    <div className="space-y-6 min-w-0">
      <AppCards />
      <BookingLink />
      <div className="overflow-auto">
      <Table />
      </div>
    </div>
  );
};

export default Appointments;
