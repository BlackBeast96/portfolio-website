import React from 'react'
import { useState } from 'react'
import { useSpring, animated } from "react-spring"
import Nav_component from './nav_component'
import { ArrowCircleUp,ViewStream,Clear } from "@mui/icons-material"


function Mobilenavbar() {
  const [show, setshow] = useState("invisible")
  const [styles, api] = useSpring(() => ({ height: "40px", width: "40px" }))

  const [change,setchange]=useState(false);

  function handleclick() {
    setchange(true);
    api.start({
      to: async (next) => {
        await next({ height: "250px" })
        await next({ width: "250px" })
      }
    })
    setTimeout(() => {
      setshow("visible")
    }, 1000);

  }


  function handleclick2(){
    window.scrollTo({top:0,behavior:'smooth'})
  }

  const [goto,setgoto]=useState("invisible");
  window.addEventListener("scroll",()=>{
    if(window.scrollY>=80){
      setgoto("visible")
    }
    else{
      setgoto("invisible")
    }
  })

  function handlecross(){
    setchange(false);
    api.start({
      to: async (next) => {
        await next({ width: "40px" })
        await next({ height: "40px" })
      }
    })
  }

  window.addEventListener("resize",()=>{
    if(window.innerWidth>=768){
      setshow("invisible")
    }
    else{
      if(change){
        setshow("visible")
      }
      else{
        setshow("invisible")
      }
    }
  })
  return (
    <>
      <div className={` ${goto} ml-[75vw] sm:ml-[82vw] flex mt-[35rem] justify-end fixed animate-bounce`}>
        <ArrowCircleUp sx={{ color: "white", width: 50, height: 40 }} onClick={()=>handleclick2()} />
      </div>
      <div className='flex justify-end mt-[-15px] '>
        <animated.div style={styles} className='w-10 h-10  z-10 bg-yellow-500 cursor-pointer   rounded-md' >
          {change ? <Clear sx={{width:40,height:40,position:"absolute",zIndex:10}} onClick={()=>{
            handlecross()
            setTimeout(() => {
              setshow("invisible")
            }, 10);
          }
          } /> : <ViewStream sx={{width:40,height:40,position:"absolute"}} onClick={handleclick}/>}
          
          <div style={styles}>
            <Nav_component className={` ${show} grid text-black  text-3xl ml-10 mt-6 `} />
          </div>
        </animated.div>
      </div>
    </>
  )
}

export default Mobilenavbar