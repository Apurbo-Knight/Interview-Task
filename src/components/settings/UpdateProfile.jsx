import React from "react";
import avatar from "../../assets/Avatar.png";
import edit from "../../assets/edit.png";
const UpdateProfile = () => {
  return (
    <div>
      <p className="text-white text-xl mb-2">Profile Picture</p>
      <div className="flex items-end">
        <img
          className="w-25 h-25 border-2 border-[#1443ef] rounded-full"
          src={avatar}
          alt=""
        />
        <img className="w-7 h-7 -ml-5" src={edit} alt="" />
      </div>
      <form action="">
        <div className=" text-white mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-6">
          <div className="space-y-2">
            <p>Full Name</p>
            <input
              className="bg-[#0A0A0F]/50 border border-[#00FF88]/20 rounded-xl px-4 py-3 w-full"
              type="text"
              name=""
              id=""
              placeholder="Jane D."
            />
          </div>
          <div className="space-y-2">
            <p>Email</p>
            <input
              className="bg-[#0A0A0F]/50 border border-[#00FF88]/20 rounded-xl px-4 py-3 w-full"
              type="email"
              name=""
              id=""
              placeholder="jane@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <p>Store Name</p>
            <input
              className="bg-[#0A0A0F]/50 border border-[#00FF88]/20 rounded-xl px-4 py-3 w-full"
              type="text"
              name=""
              id=""
              placeholder="Ubreakfix Store"
            />
          </div>
          <div className="space-y-2">
            <p>Store Address</p>
            <input
              className="bg-[#0A0A0F]/50 border border-[#00FF88]/20 rounded-xl px-4 py-3 w-full"
              type="text"
              name=""
              id=""
              placeholder="123 Main Street, New York"
            />
          </div>
        </div>
        <div className="w-[373px] mt-20 mx-auto">
            <button className="bg-[#00C950] rounded-xl text-white p-2 w-full" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
