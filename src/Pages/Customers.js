import { Box } from '@mui/material'
import React from 'react'
import SideNav from '../Components/SideNav'
import Navbar from '../Components/Navbar'
import CustomerList from './Customers/CustomerList'


const Customers = () => {
  return (
    <>
    <div className="bgcolor">
    <Navbar />
    <Box height ={70}/>
    <Box
     sx={{display:"flex"}}>
      <SideNav/>
      <Box component="main" sx={{flexgrow: 1,p: 3, width: "100%" }}>
   <CustomerList />
      </Box>
  
    </Box>
    </div>

    
      
    </>
  )
}

export default Customers