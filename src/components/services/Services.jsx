import React from 'react'
import Service_block from './Service_block'
import {Code,CameraFront,Build} from "@mui/icons-material"
function Services() {
  return (
    <>
      <h1 className=" underline decoration-8 underline-offset-8 decoration-white text-center text-4xl text-[#FFB800] font-bold mt-14  sm:mt-24">Services</h1>
      <div className='flex justify-center  flex-wrap'>
          <Service_block name="React Js" detail="creating website from scratch using react js library " icon={<Code sx={{width:40,height:40}}/>}/>          
          <Service_block name="Front End Development" detail="create website frontend from scratch to advance in minimum prices" icon={<CameraFront sx={{width:40,height:40}}/>}/>          
          <Service_block name="UI/UX Development" detail="UI/UX design is also served by me" icon={<Build sx={{width:40,height:40}}/>}/>          
                 
      </div>
    </>
  )
}

export default Services