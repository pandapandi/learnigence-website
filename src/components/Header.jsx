import React from 'react'
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdSupportAgent } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className='w-full  py-6 flex justify-between items-center'>
      <div className='flex items-center max-h-min '>
        <div className='bg-wd p-3 rounded-xl mr-4 flex justify-center'>
          <IoChevronBackSharp className='text-grey text-xl' />
        </div>
        <h1 className='text-b font-extrabold text-3xl'> Basic Mathematics 101 </h1>
      </div>

      <div className='flex '>
        <div className='flex items-center mr-10'>
          <div className='rounded-full bg-blue w-10 aspect-square flex items-center justify-center mr-3'>
            <BiSolidPhoneCall className='text-w text-2xl' />
          </div>
          <h3 className='font-semibold'>Call Teacher</h3>
        </div>

        <div className='flex items-center'>
          <div className='rounded-full bg-orange w-10 aspect-square flex items-center justify-center mr-3'>
            <MdSupportAgent className='text-w text-2xl' />
          </div>
          <h3 className='font-semibold'>Support</h3>
        </div>
      </div>
      
    </div>
  )
}

export default Header
