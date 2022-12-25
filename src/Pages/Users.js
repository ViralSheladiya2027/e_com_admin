import { Box } from '@mui/material'
import React from 'react'
import SideNav from '../Components/SideNav'
import Navbar from '../Components/Navbar'


const User = () => {
  return (
    <>
    <Navbar />
    <Box height ={30}/>
    <Box
     sx={{display:"flex"}}>
      <SideNav/>
      <Box component="main" sx={{flexgrow: 1,p: 3}}>
      products
      </Box>
  
    </Box>
      
    </>
  )
}

export default User
