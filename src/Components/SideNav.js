import { ShoppingCart } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import  React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from "../Store";
import { auth } from "./Firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function SideNav({numRows}) {
  const theme = useTheme();
  // const [open, setOpen] =useState(true);

  // const updateOpen = useStore((state)=>state.updateOpen);
const open = useStore((state)=>state.dopen);
// const numRows = useStore((state) => state.numRows);

  const navigate = useNavigate();
const logOutClick =()=>{
  auth.signOut();
  toast.success("Your account has been logout", {
      position: "top-center",
      theme: "colored",
    });
   navigate("/login");
}
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  console.log(numRows)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Thunder Admin
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box height ={30}/>
          <IconButton >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {/* <ListItem  disablePadding sx={{display:"block"}}>
                <ListItemButton onClick={()=>navigate('/') }>
                  <ListItemIcon>
                   <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem> */}
              <ListItem  disablePadding>
              <ListItemButton onClick={()=>navigate('/products') }>
                  <ListItemIcon>
                   <ShoppingCart />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>
              <ListItem  disablePadding>
              <ListItemButton onClick={()=>navigate('/customers') }>
                  <ListItemIcon>
                   <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Customers" />
                </ListItemButton>
              </ListItem>
               <ListItem  disablePadding>
              <ListItemButton onClick={()=>navigate('/orders') }>
                  <ListItemIcon>
                   <AddShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Orders ${numRows}`} />
                </ListItemButton>
              </ListItem>
              {/* <ListItem  disablePadding>
              <ListItemButton onClick={()=>navigate('/analytics') }>
                  <ListItemIcon>
                   <AnalyticsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Analytics" />
                </ListItemButton>
              </ListItem> */}
            
              <ListItem  disablePadding>
              <ListItemButton onClick={()=>navigate('/settings') }>
                  <ListItemIcon>
                   <SettingsIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Setting" />
                </ListItemButton>
              </ListItem>
            
        </List>
        <Divider />
        <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText  onClick={logOutClick} primary="Logout" />
                </ListItemButton>
              </ListItem>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        </Box> */}
    </Box>
  );
}

