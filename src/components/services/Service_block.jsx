import React from 'react'

function Service_block({name,detail,icon}) {
  return (
    <>
        <div className='text-white w-96 grid justify-items-center mt-14 lg:ml-20'>
            {icon}
            <h1 className='text-2xl font-bold mt-6 '>{name}</h1>
            <h1 className='mt-4 mb-2 text-center'>{detail}</h1>
        </div>
    </>
  )
}

export default Service_block