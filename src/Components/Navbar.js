// import  {useState} from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import CategoryIcon from '@mui/icons-material/Category';
// import LogoutIcon from '@mui/icons-material/Logout';
// import logo from "../Components/logo/logo.png"
// import HomeIcon from '@mui/icons-material/Home';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
// import SettingsIcon from '@mui/icons-material/Settings';
// import HomeFregment from "../Fregments/HomeFregment";
// import { ShoppingCart } from '@mui/icons-material';
// import { Button, CssBaseline } from '@mui/material';
// import {useAuthState} from "react-firebase-hooks/auth"
// import {auth} from "./Firebase"
// import { useNavigate} from 'react-router-dom';
// import { Link } from "react-router-dom";
// import Products from '../Components/Products';


// const drawerWidth = 160


// const Navbar = () => {

// const [user,loading,error] = useAuthState(auth);
// const [menuData, setMenuData] = useState("")
// const navigate = useNavigate();
// const logOutClick =()=>{
//   auth.signOut();
//    navigate("/login");
// }



//   return (
    
//        <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
     
//       <AppBar position="fixed"  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ background: '#263238' }}>
//         <Toolbar>
          
//           <Typography variant="h6" noWrap component="div">
//           <img src={logo } height= "40px"style={{marginRight:"15px"}} />
//           <Typography variant = "h4" display="inline"> Admin</Typography>
//           </Typography>
          
          
//             {/* <Button color="inherit" variant="outlined" onClick={logOutClick}>{user?.email} Logout</Button> */}
           
      
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         position="fixed"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
          
//               <ListItem  disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                    <HomeIcon/>
//                   </ListItemIcon>
//                   <ListItemText primary="Home" />
//                 </ListItemButton>
//               </ListItem>
//               <ListItem  disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                    <CategoryIcon/>
//                   </ListItemIcon>
//                   <ListItemText primary="Categories" />
//                 </ListItemButton>
//               </ListItem>
//               <ListItem  disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                    <ProductionQuantityLimitsIcon/>
//                   </ListItemIcon>
//                   <ListItemText primary="Products" onClick={()=>setMenuData("Products")} />
                
//                 </ListItemButton>
//               </ListItem>
//               <ListItem  disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                    <ShoppingCart />
//                   </ListItemIcon>
//                   <ListItemText primary="Orders" />
//                 </ListItemButton>
//               </ListItem>
//               <ListItem  disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                    <SettingsIcon/>
//                   </ListItemIcon>
//                   <ListItemText primary="Setting" />
//                 </ListItemButton>
//               </ListItem>
            
//           </List>
//           <Divider />
//           <List>
           
//               <ListItem  disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                    <LogoutIcon />
//                   </ListItemIcon>
//                   <ListItemText  onClick={logOutClick} primary="Logout" />
//                 </ListItemButton>
//               </ListItem>
            
//           </List>
          
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 3, p: 10 }}>
//     {/* <Toolbar/> */}

// {/* <HomeFregment /> */}
// {menuData == "Products" && <Products/> }
// </Box>
//     </Box>
//   )
// }

// export default Navbar;

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
 
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}