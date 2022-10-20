import React from 'react'
import {Box,Typography} from "@mui/material"
import { green } from '@mui/material/colors';

const ProductViews = () => {
  return (
    <Box p ="18px" bgcolor="white" boxShadow="8px" mx="4px" borderRadius="16px">
<img width="120px" height= "120px" bgcolor="red" />
      <Typography variant="subtitle1" >Title</Typography>
      <Typography variant="subtitle2" ><span style={{color:green.A700}}>offer</span></Typography>
      <Typography variant="h6" >Rs.xxx</Typography>
   </Box>
  )
}

export default ProductViews;
