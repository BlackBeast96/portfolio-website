import React from 'react'
import { Button, ButtonGroup } from "@mui/material"
function Main() {
  return (
    <div className='text-[#FFB800] font-bold mt-10 sm:mt-14'>
      <div className='flex justify-between bg-[#553939] rounded-xl pt-32 ml-28 mr-28 mb-20 sm:pl-8 '>
        <section className='mt-72 sm:mt-0 z-10'>
          <h1>HELLO!</h1>
          <div className='text-6xl mt-7 sm:text-7xl'><h1 className='inline text-white'>I'm </h1> Hem</div>
          <h1 className='text-7xl sm:text-8xl sm:mt-2'>Bahadur</h1>
          <h1 className='text-white mt-7 text-2xl'>A Freelance FrontEnd Developer</h1>
          <div className='sm:mt-20 mt-10 space-x-4'>
            <Button variant="contained" color="success" sx={{ background: "yellow", borderRadius: 10, width: "100px", color: "black", fontWeight: "bold" }}>HIRE ME</Button>
            <Button variant="outlined" sx={{ borderRadius: 10, width: "120px", color: "white", fontWeight: "bold" }}>MY WORKS</Button>
          </div>
        </section>
        <section className='absolute sm:relative sm:mt-[-10rem] '>
          <img className='w-auto sm:w-[40rem] sm:h-[40rem] h-96' src='./main_page.png' alt="main page image" />
        </section>
      </div >
    </div>
  )
}

export default Main