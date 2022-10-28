import React from 'react'
import Footer_card from './footer_card'
function Footer() {
  return (
    <>
     <div className='text-white grid justify-center mt-20 mb-10'>
        <div className='text-5xl space-x-4 flex justify-center flex-wrap  font-extrabold'>
          <h1 className='inline text-[#FFB800]'>“Always  </h1>
          <h1>Learning</h1>
          <h1 className="text-[#FFB800] inline">And </h1>
          <h1>Exploring”</h1>
        </div>
      </div>
      <div className='bg-blue-500 h-52 grid grid-cols-3 mt-28 sm:mt-40 '>
        <img className='sm:h-60 h-52  ml-8 mt-[-55px] border-2 border-black' src="./footer.jpg" />
        <Footer_card category="About" first="Our Projects" second="Carrers" />
        <Footer_card category="Support" first="Contact" />
      </div>
    </>
  )
}

export default Footer