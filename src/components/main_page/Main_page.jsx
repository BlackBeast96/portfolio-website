import React from 'react'
import { Button, ButtonGroup } from "@mui/material"
function Main() {
  return (
    <div className='text-[#FFB800] font-bold mt-[-30px] '>
      <img className='absolute z-[-1] h-[30rem] sm:h-[42rem] w-full' src="./img.png" alt="main page image"/>
      <div className='text-center sm:text-start sm:ml-32 pt-32 sm:pt-40  '>
        <section className='z-10'>
          <h1>HELLO!</h1>
          <div className='text-6xl mt-7 sm:text-6xl'><h1 className='inline text-white'>I'm </h1> Hem</div>
          <h1 className='text-6xl sm:text-7xl sm:mt-2'>Bahadur</h1>
          <h1 className='text-white mt-7 text-2xl'>A Freelance FrontEnd Developer</h1>
          <div className='sm:mt-20 mt-10 space-x-4'>
            <Button variant="contained" color="success" sx={{ background: "yellow", borderRadius: 10, width: "100px", color: "black", fontWeight: "bold" }}
            onClick={()=>window.location.href="https://www.freelancer.com/u/blackbeasthg"}
            >HIRE ME</Button>
            <Button variant="outlined" sx={{ borderRadius: 10, width: "120px", color: "white", fontWeight: "bold" }}
            onClick={()=>window.location.href="https://github.com/BlackBeast96?tab=repositories"}
            >MY WORKS</Button>
          </div>
        </section>
        
      </div >
    </div>
  )
}

export default Main