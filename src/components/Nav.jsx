import React from 'react'
import { LuSchool2 } from "react-icons/lu";
import { FaChalkboard } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { GrDocumentVideo } from "react-icons/gr";



const Nav = () => {
  const navList = [
    {
      icon: <LuSchool2 />,
      title: "Classroom",
    },
    {
      icon: <FaChalkboard />,
      title: "Whiteboard",
    },
    {
      icon: <MdOndemandVideo />,
      title: "Videos",
      active: true
    },
    {
      icon: <RiSlideshowLine />,
      title: "Slideshow",
    },
    {
      icon: <GrDocumentText />,
      title: "Documents",
    },
    {
      icon: <GrDocumentVideo />,
      title: "Doc.cam",
    },
  ]
  return (
    <div className='max-w-full w-full bg-wd p-2 rounded-full flex items-center overflow-scroll'>
        {
          navList.map((item) => {
            return (
              <NavItem title={item.title} icon={item.icon} active={item.active} />
            )
          })
        }
    </div>
  )
}

export default Nav

const NavItem = ({ title, icon, active }) => {
  const isActive = active
  return (
    <button className={`px-7 py-3 items-center hover:text-b hover:bg-w rounded-full flex mr-3 ${ isActive && "bg-w text-b"}} text-grey`}>
      {icon}
      <p className='font-medium text-sm ml-2'> {title} </p>
    </button>
  )
}

