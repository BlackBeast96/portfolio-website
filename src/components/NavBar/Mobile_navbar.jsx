import React from 'react'
import { useState } from 'react'
import { useSpring, animated } from "react-spring"
import Nav_component from './nav_component'

function Mobilenavbar() {
  const [show, setshow] = useState("invisible")
  const [styles, api] = useSpring(() => ({ height: "40px", width: "40px" }))

  function handleclick() {
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


  return (
    <>
      <div className='flex justify-end mt-[-15px] '>
        <animated.div style={styles} className='w-10 h-10 bg-white z-10 absolute rounded-md' onClick={handleclick}>
          <div style={styles}>
            <Nav_component className={` ${show} grid text-black  text-3xl ml-10 mt-6 `} />
          </div>
        </animated.div>
      </div>
    </>
  )
}

export default Mobilenavbar