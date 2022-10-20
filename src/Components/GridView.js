import { Box ,Typography} from '@mui/material'
import React from 'react'
import ProductViews from "./ProductViews"

const GridView = () => {
  return (
    <Box bgcolor="white" width="400px" p ="16px" mx="auto">
     <Typography variant="h5"  >Title</Typography>
     <Box display="flex" p ="16px" justifyContent="center"> 
     <ProductViews />
      <ProductViews />
        </Box> 
        <Box display="flex" justifyContent="center"> 
      <ProductViews />
      <ProductViews />
      </Box >
    </Box>
  )
}

export default GridView
