import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ProductViews from './ProductViews'

const HorizontalScroller = () => {
  return (
    <Box bgcolor="white" p="16px">
         <Typography variant="h5"  >Title</Typography>
    <Box display="flex" overflow="auto">      
  <ProductViews />
  <ProductViews />
  <ProductViews />
  <ProductViews />
  <ProductViews />
  <ProductViews />
  <ProductViews />
  <ProductViews />
  </Box>
  </Box>
  )
}

export default HorizontalScroller
