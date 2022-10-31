import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"


function Nav_component(props) {
    const navigate=useNavigate();

    const [fix,setfix]=useState(null);
    const [bg,setbg]=useState(null);
    if(window.innerWidth>768){
        window.addEventListener("scroll",(e)=>{
            if(window.scrollY>=75){
                setfix("fixed")
                setbg("bg-[#0A05FF]")
            }
            else{
                setfix(null)
                setbg(null)
            }
        })
        
    }
    


    function handleclick(e){
        window.scrollTo({top:e,left:0,behavior:'smooth'})
    }
    return (
        <ul className={`justify-end mr-10 flex space-x-5 font-extrabold  md:mt-4 ${fix} z-20 ${bg} ${props.className} `}>
            <li className='hover:underline underline-offset-4  hover:text-[#FFB800] cursor-pointer decoration-4' onClick={() =>{
                 navigate("/")
                handleclick(0)
            }}>Home</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] scroll-smooth  cursor-pointer transition-all' onClick={()=>handleclick(621)}>Projects</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={()=>handleclick(3227)}>Resume</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={()=>handleclick(2393)}>Services</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={()=>handleclick(1473)}>Skills</li>
            <li className='hover:underline underline-offset-4 decoration-4 hover:text-[#FFB800] cursor-pointer' onClick={()=>handleclick(4535)}>About</li>
        </ul>
    )
}

export default Nav_component