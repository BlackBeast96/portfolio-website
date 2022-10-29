import React from 'react'
import Mobilenavbar from './Mobile_navbar'
import Nav_component from './nav_component';
function Navbar() {
    return (
        <nav className='text-white  rounded-xl pb-4 pt-1 bg-[#0A05FF] pl-10 pr-20 h-16 md:h-auto '>
            <h1 className='float-left text-3xl font-extrabold sm:ml-4 md:ml-20 mt-2  '>Hem</h1>
            <div>
                <Nav_component className="invisible md:visible "/>
                <ul className='md:invisible justify-end sm:mr-10 md:absolute'>
                    <Mobilenavbar />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar