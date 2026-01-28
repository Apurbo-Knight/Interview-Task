import React from "react";
import { Link } from "react-router";
import menu from "../../assets/menu.png";

const BookingLink = () => {
  return (
    <div className="p-6 space-y-4 bg-gradient-to-b from-[#1A1A2E] to-[#16213E] text-md text-white rounded-2xl">
      <p>Booking Link</p>
      <div className="flex gap-3 w-full">
        <input
          className="w-full bg-[#0A0A0F]/50 rounded-2xl border border-[#00FF88]/20 px-4 py-3"
          type="text"
          name=""
          id=""
          placeholder="https://techstore.com/book?id=store123"
        />
        <Link className="flex justify-center items-center gap-3 w-[150px] rounded-xl py-1 px-2 shadow-[inset_0_6px_6px_rgb(224_242_254),inset_0_-6px_6px_rgb(224_242_254)]">
          <img className="w-6" src={menu} alt="" />{" "}
          <p className="text-white">Copy Link</p>
        </Link>
      </div>
    </div>
  );
};

export default BookingLink;
