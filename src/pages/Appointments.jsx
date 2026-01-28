import React from "react";
import AppCards from "../components/appointment/AppCards";
import BookingLink from "../components/appointment/BookingLink";
import Table from "../components/appointment/Table";

const Appointments = () => {
  return (
    <div className="space-y-6">
      <AppCards />
      <BookingLink />
      <Table />
      
    </div>
  );
};

export default Appointments;
