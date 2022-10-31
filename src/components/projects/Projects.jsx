import React from 'react'
import Project_card from './Project_card'
function Projects() {
  return (
    <>
      <div className='text-white grid justify-center mt-24  sm:mt-48'>
        <h1 className='text-center  text-4xl font-extrabold underline underline-offset-8 decoration-8 text-[#FFB800] decoration-white'>Projects</h1>
      </div>
      <div className='flex justify-center'>
      <div className='flex justify-center  flex-wrap  mr-10 w-[60rem]'>
        <Project_card link="https://hackathon-dphi.netlify.app/" img="./rocket.svg" />
        <Project_card link="https://air-bender.netlify.app/" img="./shoes.png" />
       
      </div>
      </div>
    </>
  )
}

export default Projects