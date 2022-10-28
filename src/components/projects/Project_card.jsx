import React from 'react'

function Project_card() {
  return (
    <div className='w-60 h-80 rounded-lg bg-blue-500 mt-16 ml-20 group overflow-hidden'>
        <img className='group-hover:invisible transition-all duration-500 group-hover:translate-y-96' src='rocket.svg' alt="air-bender"/>
        <div className='w-60 h-80 group-hover:mt-[-18rem] transition-all ease-in-out duration-500 invisible  group-hover:visible mt-[-40rem] pt-10 '>
            <img  className='w-20 h-auto ml-20 mb-10 mt-6' src="redirect.png" alt="blured image"/>
            <a href="https://air-bender.netlify.app/" target="_blanck" className='text-5xl no-underline text-white text-center'>https://air-bender.netlify.app/</a>
        </div>
    </div>
  )
}

export default Project_card