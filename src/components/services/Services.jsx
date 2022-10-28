import React from 'react'
import Service_block from './Service_block'
function Services() {
  return (
    <>
      <h1 className=" underline decoration-8 underline-offset-8 decoration-white text-center text-4xl text-[#FFB800] font-bold mt-10">Services</h1>
      <div className='flex justify-center'>
        <div className='lg:flex flex-wrap lg:w-[65rem] '>
          <Service_block />
          <Service_block />
          <Service_block />
          <Service_block />
          <Service_block />
          </div>
      </div>
    </>
  )
}

export default Services