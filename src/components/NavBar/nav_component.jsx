import React from 'react'
import {useNavigate} from "react-router-dom"

function Nav_component(props) {
    const navigate=useNavigate();

    return (
        <ul className={`justify-end mr-10 flex space-x-5 font-extrabold  md:mt-4 ${props.className} `}>
            <li className='hover:underline underline-offset-4  hover:text-[#FFB800] cursor-pointer decoration-4' onClick={() => navigate("/")}>Home</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={() => navigate("/Projects")}>Projects</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={() => navigate("/Resume")}>Resume</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={() => navigate("/Services")}>Services</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={() => navigate("/Skills")}>Skills</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={() => navigate("/About")}>About</li>
        </ul>
    )
}

export default Nav_component