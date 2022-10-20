import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import BannerSlider from '../Components/BannerSlider';
import GridView from '../Components/GridView';
import HorizontalScroller from '../Components/HorizontalScroller';
import logo from "../Components/logo/logo.png";
import StripAdView from '../Components/StripAdView';


export const CategoryTab=()=>{
    return <Box>
         <img src={logo }  height= "40px"  style={{marginRight:"15px"}} />
         <Typography variant="body2"  > Title</Typography>
    </Box>
}

const HomeFregment = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    
   
  return (
    <Container maxwidth ="md" >
      
       <Box sx={{  maxWidth: { xs: 600, sm: 1000 }, bgcolor: '#ffffff' }}>
     <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      textColor="primary"
      aria-label="visible arrows tabs example"
  
    >
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
      <Tab icon ={<CategoryTab/>}/>
    </Tabs>
    </Box>
  <BannerSlider />
  <HorizontalScroller/>
  <StripAdView />
 <GridView />
  </Container>
  
  )
}

export default HomeFregment