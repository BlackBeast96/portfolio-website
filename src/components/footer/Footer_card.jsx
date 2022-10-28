import React from 'react'

function Footer_card({category,first,second,third}) {
    return (
        <div className='ml-20 mt-8'>
            <h1 className='text-white font-bold text-2xl'>{category}</h1>
            <div className='block text-xl font-normal mt-10'>
                <h1 className='text-white'>{first}</h1>
                <h1 className='text-white'>{second}</h1>
                <h1 className='text-white'>{third}</h1>
            </div>
        </div>
    )
}

export default Footer_card