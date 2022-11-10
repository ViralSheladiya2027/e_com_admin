import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../Components/logo/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeFregment from "../Fregments/HomeFregment";
import { ShoppingCart } from '@mui/icons-material';
import { Button, CssBaseline } from '@mui/material';
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "./Firebase"
import { useNavigate} from 'react-router-dom';



const drawerWidth = 160


const Navbar = () => {

const [user,loading,error] = useAuthState(auth);
const navigate = useNavigate();
const logOutClick =()=>{
  auth.signOut();
   navigate("/login");
}

  return (
    
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ background: '#001440' }}>
        <Toolbar>
          
          <Typography variant="h6" noWrap component="div">
          <img src={logo } height= "40px"style={{marginRight:"15px"}} />
          <Typography variant = "h4" display="inline"> Admin</Typography>
          </Typography>
          
          <Typography  >
            <Button  variant="outlined" onClick={logOutClick}>{user?.email} Logout</Button>
           </Typography>
      
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
          
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <CategoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Categories" />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <ProductionQuantityLimitsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <ShoppingCart />
                  </ListItemIcon>
                  <ListItemText primary="Orders" />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Setting" />
                </ListItemButton>
              </ListItem>
            
          </List>
          <Divider />
          <List>
           
              <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 3, p: 10 }}>
    {/* <Toolbar/> */}

<HomeFregment />

</Box>
    </Box>
  )
}

export default Navbar;
