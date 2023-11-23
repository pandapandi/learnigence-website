import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { LuEye } from "react-icons/lu";
import { MdPeopleAlt } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import logo from "./../assets/logo.png"



const LeftPanel = () => {
  return (
    <div className='h-screen bg-wd flex flex-col items-center py-8 px-5 relative'>
      {/* <div className='aspect-square bg-grey w-12'></div> */}
      <img src={logo} className="w-20" />
      
      <ul className='flex flex-col w-full items-center mt-10'>
        <li className='mb-7 text-2xl text-b'> <button> <RiMenu2Line /> </button> </li>
        <li className='mb-7 text-2xl text-b relative'>
          <div className='bg-red w-3 aspect-square rounded-full absolute right-0' />
           <button> <GoBell /> </button> 
        </li>
        <li className='mb-7 text-2xl text-grey'> <button> <IoIosTimer  /> </button> </li>
        <li className='mb-7 text-2xl text-grey'> <button> <HiOutlineClipboardDocumentCheck /> </button> </li>
        <li className='mb-7 text-2xl text-grey'> <button> <LuEye/> </button> </li>
        <li className='mb-7 text-2xl text-grey'> <button> <MdPeopleAlt /> </button> </li>
        <li className='mb-7 text-2xl text-grey'> <button> <MdBarChart /> </button> </li>
      </ul>

      <div className='aspect-square w-1/2 bg-purple absolute bottom-10 rounded-full'>

      </div>
    </div>
  )
}

export default LeftPanel
