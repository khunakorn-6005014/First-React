import "./styles.css";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link ,useNavigate} from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MultiComponent from "./components/courses/MutiComponent";
import ReactRouter from "./components/courses/ReactRouteComponent";
import OrderBurger from "./components/courses/OrderBurgerComponent";
import ProductList from "./components/courses/ProductListComponent";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//
import Home from "./components/courses/page/HomeComponent";
import Layout from "./components/courses/page/LayoutComponent";
import NoPage from "./components/courses/page/NoPageComponent";
import Login from "./components/courses/page/LoginComponent";
import About from "./components/courses/page/AboutComponent";
import MainContentComponent from "./components/MainContentComponent";


export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  //const navigate = useNavigate(); 
  

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['home', 'about', 'login'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <HeaderComponent />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Khunakorn AppBar
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <Box sx={{ padding: 2 ,textAlign: 'left' }}>
          <Typography variant="h6">Exercise 16-17</Typography>
          <ReactRouter />
          <Divider sx={{ margin: 2 }} />
          
          <Typography variant="h6">Exercise 18</Typography>
          <OrderBurger />
          <Divider sx={{ margin: 2 }} />
          
          <Typography variant="h6">Exercise 19</Typography>
          <ProductList />
          <Divider sx={{ margin: 2 }} />
          
          <Typography variant="h6">Exercise 21</Typography>
          <MultiComponent />
          <Divider sx={{ margin: 2 }} />
          
          <Typography variant="h6">Thank you</Typography>
        </Box>
       
      <FooterComponent />
    </div>
  );
}
/*
 <div className="App">
  <MainContentComponent />    
    </div>

*/