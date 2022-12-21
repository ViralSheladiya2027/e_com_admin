import { Box } from '@mui/material'
import React from 'react'
import SideNav from './SideNav'
import Navbar from './Navbar'


const Products = () => {
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

export default Products
