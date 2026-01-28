import React from 'react'
import phone from '../../assets/phone.png'
import tv from '../../assets/tv.png'
import arrow from '../../assets/arrow.png'
import calender from '../../assets/calender.png'
import cross from '../../assets/cross.png'
import watch from '../../assets/watch.png'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
      <div className=' flex justify-between bg-[#0F172B] p-4 md:p-6 rounded-2xl border border-[#2b7FFF]/20'>
        <div>
          <p className='text-[#90A1B9] text-sm'>Total Calls Today</p>
          <p className='text-white text-2xl md:text-3xl mt-2 mb-4'>127</p>
          <p className='text-[#05DF72] text-sm'>+12%</p>
        </div>
        <div>
          <img className='w-12' src={phone} alt="" />
        </div>
      </div>
      <div className='  flex justify-between bg-[#0F172B] p-4 md:p-6 rounded-2xl border border-[#2b7FFF]/20'>
        <div>
          <p className='text-[#90A1B9] text-sm'>AI-Handled Calls</p>
          <p className='text-white text-2xl md:text-3xl mt-2 mb-4'>98</p>
          <p className='text-[#05DF72] text-sm'>+77%</p>
        </div>
        <div>
          <img className='w-12' src={tv} alt="" />
        </div>
      </div>
      <div className=' flex justify-between bg-[#0F172B] p-4 md:p-6 rounded-2xl border border-[#2b7FFF]/20'>
        <div>
          <p className='text-[#90A1B9] text-sm'>Warm Transfer</p>
          <p className='text-white text-2xl md:text-3xl mt-2 mb-4'>23</p>
          <p className='text-[#05DF72] text-sm'>+18%</p>
        </div>
        <div>
          <img className='w-12' src={arrow} alt="" />
        </div>
      </div>
      <div className=' flex justify-between bg-[#0F172B] p-4 md:p-6 rounded-2xl border border-[#2b7FFF]/20'>
        <div>
          <p className='text-[#90A1B9] text-sm'>Appointments Booked</p>
          <p className='text-white text-2xl md:text-3xl mt-2 mb-4'>34</p>
          <p className='text-[#05DF72] text-sm'>+8%</p>
        </div>
        <div>
          <img className='w-12' src={calender} alt="" />
        </div>
      </div>
      <div className='  flex justify-between bg-[#0F172B] p-4 md:p-6 rounded-2xl border border-[#2b7FFF]/20'>
        <div>
          <p className='text-[#90A1B9] text-sm'>Missed/Failed Calls</p>
          <p className='text-white text-2xl md:text-3xl mt-2 mb-4'>6</p>
          <p className='text-red-800 text-sm'>-3%</p>
        </div>
        <div>
          <img className='w-12' src={cross} alt="" />
        </div>
      </div>
      <div className='  flex justify-between bg-[#0F172B] p-4 md:p-6 rounded-2xl border border-[#2b7FFF]/20'>
        <div>
          <p className='text-[#90A1B9] text-sm'>Avg Call Duration</p>
          <p className='text-white text-2xl md:text-3xl mt-2 mb-4'>3:42</p>
          <p className='text-[#05DF72] text-sm'>+15%</p>
        </div>
        <div>
          <img className='w-12' src={watch} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cards
