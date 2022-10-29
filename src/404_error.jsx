import React from 'react'
import {Button} from "@mui/material"
import {useNavigate} from "react-router-dom"
function Error_page() {
  const navigate=useNavigate();

  function handleClick(){
    navigate("/")
  }
  return (
    <div className='text-center space-y-8 mt-14'>
      <h1 className='text-white font-extrabold text-6xl'>404 Error</h1>
      <Button variant="contained" sx={{fontSize:30}} onClick={handleClick}>Go To Homepage</Button>
      
      </div>
  )
}

export default Error_page