import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container, Typography } from '@mui/material';
import logo from "../Components/logo/logo.png"
import BannerSlider from '../Components/BannerSlider';

export const CategoryTab=()=>{
    return <Box>
         <img src={logo } height= "40px"style={{marginRight:"15px"}} />
         <Typography variant="body2"  > Title</Typography>
    </Box>
}

const HomeFregment = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    
   
  return (
    <Container maxwidth ="md" fixed>
       <Box sx={{  maxWidth: { xs: 660, sm: 1000 }, bgcolor: '#ffffff' }}>
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
  </Container>
  )
}

export default HomeFregment