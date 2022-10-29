import React,{useState} from 'react'
import { useEffect } from 'react';
import Skillbar from './Skillbar'
function Skills() {
  return (
    <>
      <h1 className='mt-14 sm:mt-24 underline decoration-8 underline-offset-4 decoration-white text-center text-4xl text-[#FFB800] font-bold'>Skills</h1>
      <div className='flex flex-wrap  justify-center mt-6'>
        <Skillbar name="HTML/CSS" percentage={85} />
        <Skillbar name="JAVASCRIPT" percentage={80} />
        <Skillbar name="REACT JS" percentage={75} />
        <Skillbar name="TAILWINDCSS" percentage={75} />
        <Skillbar name="FIGMA" percentage={70} />
      </div>
    </>
  )
}

export default Skills