import React from 'react'

function Project_card({img,link}) {
  return (
    <div className='w-60 h-80 rounded-lg bg-slate-700 mt-16 ml-10 sm:ml-20 group overflow-hidden'>
        <img className='group-hover:invisible transition-all duration-500 group-hover:translate-y-[-20rem] h-full w-auto z-0 ' src={img} alt={img}/>
        <div className='w-60 h-80 group-hover:mt-[-14rem] transition-all ease-in-out duration-500 invisible  group-hover:visible rounded-xl bg-yellow-500 z-10 pt-5 pr-52 pl-2'>
            <img  className='w-16 h-auto ml-24 mb-4 mt-6' src="redirect.png" alt="blured image"/>
            <a href={link} target="_blanck" className='text-3xl mt-[-10px]  no-underline text-blue-600 text-center'>{link}</a>
        </div>
    </div>
  )
}

export default Project_card