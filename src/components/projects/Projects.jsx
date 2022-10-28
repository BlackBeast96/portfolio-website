import React from 'react'
import Project_card from './Project_card'
function Projects() {
  return (
    <>
      <div className='text-white grid justify-center mt-10'>
        <h1 className='text-center  text-4xl font-extrabold underline underline-offset-8 decoration-8 text-[#FFB800] decoration-white'>Projects</h1>
      </div>
      <div className='flex justify-center'>
      <div className='flex justify-center  flex-wrap  mr-10 mt-4 w-[60rem]'>
        <Project_card />
        <Project_card />
        <Project_card />
        <Project_card />
        <Project_card />
      </div>
      </div>
    </>
  )
}

export default Projects