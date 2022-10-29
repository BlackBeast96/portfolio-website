import React from 'react'

function Project_card({img,link}) {
  return (
    <div className='w-60 h-80 rounded-lg bg-slate-700 mt-16 ml-10 sm:ml-20 group overflow-hidden'>
        <img className='group-hover:invisible transition-all duration-500 group-hover:translate-y-96 h-full w-auto' src={img} alt={img}/>
        <div className='w-60 h-80 group-hover:mt-[-18rem] transition-all ease-in-out duration-500 invisible  group-hover:visible  '>
            <img  className='w-20 h-auto ml-20 mb-10 mt-6' src="redirect.png" alt="blured image"/>
            <a href={link} target="_blanck" className='text-5xl  no-underline text-white text-center'>{link}</a>
        </div>
    </div>
  )
}

export default Project_card