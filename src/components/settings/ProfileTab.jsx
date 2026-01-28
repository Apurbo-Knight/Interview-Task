import React from "react";
import avatar from "../../assets/avatar.png";

const ProfileTab = () => {
  return (
    <div>
      <p className="text-white text-xl mb-2">Profile Picture</p>
      <div className="flex items-end gap-1">
        <img className="w-25 h-25 border-2 border-[#1443ef] rounded-full" src={avatar} alt="" />
        <p className="rounded-xl py-1 px-2 shadow-[inset_0_5px_6px_rgb(224_242_254),inset_0_-5px_6px_rgb(224_242_254)] text-xs text-white">
          Edit Profile
        </p>
      </div>
      <div className="max-w-[500px] text-white mt-10">
        <div className="py-2 grid grid-cols-2 border-b border-b-[#192D71]">
          <p className="text-lg">Full Name:</p>
          <p className="text-lg">jane D.</p>
        </div>
        <div className="py-2 grid grid-cols-2 border-b border-b-[#192D71]">
          <p className="text-lg">Email:</p>
          <p className="text-lg">jane@gmail.com</p>
        </div>
        <div className="py-2 grid grid-cols-2 border-b border-b-[#192D71]">
          <p className="text-lg ">Store Name:</p>
          <p className="text-lg">Ubreakfix Store</p>
        </div>
        <div className="py-2 grid grid-cols-2 border-b border-b-[#192D71]">
          <p className="text-lg">Store Address:</p>
          <p className="text-lg">123 Main Street, New York, NY 10001</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
