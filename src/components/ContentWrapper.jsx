import React from 'react'
import img1 from "./../assets/compare-fibre-e5sTz361Jzg-unsplash.jpg"
import img2 from "./../assets/pexels-christina-morillo-1181529.jpg"
import { TbVideoPlus } from "react-icons/tb";
import { MdOutlineMicNone } from "react-icons/md";
import { RiShareForward2Fill } from "react-icons/ri"
import { BsChatQuote } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { GiSoundWaves } from "react-icons/gi";
import emojiImg from "./../assets/emoji.png"






const ContentWrapper = () => {
  const options = [
    {
      name: "Cam",
      icon: <TbVideoPlus className='text-3xl' />
    },
    {
      name: "Mic",
      icon: <MdOutlineMicNone className='text-3xl' />
    },
    {
      name: "Share",
      icon: <RiShareForward2Fill className='text-3xl' />
    },
    {
      name: "Chat",
      icon: <BsChatQuote className='text-3xl' />
    },
    {
      name: "Leave",
      icon: <MdLogout className='text-3xl' />,
      highlight: true
    },
  ]

  return (
    <div className='w-full h-[40rem] mt-8 flex'>
      <div className=' w-1/5 text-5xl overflow-scroll'>
        <Thumbnail name="Ridha" bg={img1} emoji={true} />
        <Thumbnail name="Ms Kaur" bg={img2} voice={true} />

        <div className='options-wrapper w-full h-fit mt-8'>
          {
            options.map((option) => {
              return (<OptionTile name={option.name} icon={option.icon} hgl={option.highlight} />)
            })
          }
        </div>
      </div>

      <div className=' h-full w-4/5 pl-10'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xxpc-HPKN28?si=VHTnXDw_qKajeOfq"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-full h-full rounded-lg'></iframe>
      </div>

    </div>
  )
}

export default ContentWrapper

const Thumbnail = ({ name, emoji, voice, bg }) => {
  return (

    <div className='w-full rounded-xl h-44 overflow-hidden relative mb-4' style={{ background: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className='text-sm font-medium bg-wd w-1/2 py-3 px-6 rounded-3xl  absolute bottom-0 -left-5 text-center'> {name} </div>

      {
        voice && <GiSoundWaves className='absolute top-0 text-b/40 left-2' />
      }

      {
        emoji && 
        <button className='absolute top-2 right-2 bg-wd px-2 py-1 rounded-full flex font-bold text-sm'>
          <img src={emojiImg} className='w-5 aspect-square mr-2' />
          +
        </button>

      }

    </div>
  )
}

const OptionTile = ({ name, icon, hgl }) => {
  return (
    <button className='flex flex-col items-center'>
      <div className={`w-full rounded-3xl aspect-square flex items-center justify-center ${hgl ? "bg-blue text-w" : "bg-wd"} `}>
        {icon}
      </div>
      <span className='text-sm mt-2 font-semibold'>{name}</span>
    </button>
  )
}