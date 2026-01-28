import React from "react";

const Table = () => {
  const appointments = [
    {
      name: "Jane.D",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple / iPhone 13 Pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "09:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple / iPhone 13 Pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "10:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple / iPhone 13 Pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "11:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple / iPhone 13 Pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "12:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple / iPhone 13 Pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "02:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple / iPhone 13 Pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "03:00",
    },
  ];

  return (
    <div className="bg-[#111B3B] rounded-2xl w-full max-w-[1440px] mx-auto">
      {/* Rwlative r avsolute dia kaj hoice */}
      <div className="relative overflow-x-auto overflow-y-auto h-[420px] w-full rounded-2xl border border-[#162F61]">
        <table className="absolute top-0 min-w-[1200px] w-full border-collapse text-left text-slate-300 bg-[#111B3B]">
          <thead className="sticky top-0 z-10 bg-[#111B3B]">
            <tr className="border-b border-[#162F61]">
              <th className="p-4 font-medium">Client Name</th>
              <th className="p-4 font-medium">Client Phone</th>
              <th className="p-4 font-medium">Client Mail</th>
              <th className="p-4 font-medium">Device</th>
              <th className="p-4 font-medium">Repair Type</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium text-center lg:text-left">
                Slot No
              </th>
              <th className="p-4 font-medium">Start Time</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#162F61]">
            {appointments.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-slate-800/30 transition-colors"
              >
                <td className="p-4 text-blue-400">{item.name}</td>
                <td className="p-4 text-sm">{item.phone}</td>
                <td className="p-4 text-sm">{item.email}</td>
                <td className="p-4 text-sm whitespace-nowrap">{item.device}</td>
                <td className="p-4 text-sm">{item.repair}</td>
                <td className="p-4 text-sm">{item.date}</td>
                <td className="p-4 text-sm text-center lg:text-left">
                  {item.slot}
                </td>
                <td className="p-4 text-sm">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
