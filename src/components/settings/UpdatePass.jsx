import React from 'react'

const UpdatePass = () => {
  return (
     <div className='max-w-[500px]'>
          
          <div className=" text-white mt-10  gap-x-14 space-y-6">
            <div className="space-y-2">
                <p>Current Password</p>
                <input className="bg-[#0A0A0F]/50 border border-[#00FF88]/20 rounded-xl px-4 py-3 w-full" type="text" name="" id="" placeholder=".........."/>
            </div>
            <div className="space-y-2">
                <p>New Password</p>
                <input className="bg-[#0A0A0F]/50 border border-[#00FF88]/20 rounded-xl px-4 py-3 w-full" type="text" name="" id="" placeholder=".........."/>
            </div>
            <div className="space-y-2">
                <p>Again New Password</p>
                <input className="bg-[#0A0A0F]/50 border border-[#00FF88]/20 rounded-xl px-4 py-3 w-full" type="text" name="" id="" placeholder=".........."/>
            </div>
            <div className=" mt-10 ">
            <button className="bg-[#00C950] rounded-xl text-white p-2 w-full" type="submit">Save</button>
        </div>
            
          </div>
        </div>
  )
}

export default UpdatePass
