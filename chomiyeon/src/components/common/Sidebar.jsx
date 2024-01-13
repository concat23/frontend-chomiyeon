import React from 'react'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailLockOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, colors } from '@mui/material';
import { Animate } from '../common/Animate';
import { images } from '../../assets';


const menuList = [
  {
    title:"Inbox",
    icon: <MailOutlinedIcon />,
    state: "inbox"
  },
  {
    title:"Overview",
    icon: <DashboardCustomizeOutlinedIcon />,
    state: "inbox"
  },
  {
    title:"Notification",
    icon: <NotificationsOutlinedIcon />,
    state: "notification"
  },
  {
    title:"Inbox",
    icon: <MailOutlinedIcon />,
    state: "inbox"
  },
]

const investmentMenuList = [
  { 
    title:"Stocks reade",
    icon: <SwapHorizOutlinedIcon />,
    state:"stocktrade"
  },
  {
    title:"Finance Advice",
    icon: <ChatBubbleOutlineOutlinedIcon />,
    state: "financeadvice"
  },
  {
    title:"Savings account",
    icon:<SavingsOutlinedIcon />,
    state: "savingsaccount"
  }
]
const serviceMenuList = [
  {
    title: "Mortage",
    icon: <OtherHousesOutlinedIcon />,
    state: "mortage"
  },
  {
    title: "Car loans",
    icon: <DirectionsCarFilledOutlinedIcon />,
    state: "carloan"
  },
  {
    title: "Insurance",
    icon: <SportsMotorsportsOutlinedIcon />,
    state: "insurance"
  }
]


export const Sidebar = ({sidebarWidth}) => {

  const activeState = "Overview"

  const container = window !== undefined ? () => window.document.body  : undefined

  const MenuItem = (props) =>{
    return (
      <ListItem key={props.index} disableGutters disablePadding sx={{ py: 0.5 }}>
        <ListItemButton sx={{
            borderRadius: "10px",
            bgcolor: props.isActive ? '#388e3c' :'',
            color: props.isActive ? colors.common.white : '',
            "&:hover": {  
              bgcolor: props.isActive ? colors.green[700]  : '',
              color: props.isActive ? colors.common.white : '',
            }
          }}>

            <ListItemIcon sx={{ minWidth: "30px", 
                              color:props.isActive  ? colors.common.white : ''}} >
                      {props.item.icon}
            </ListItemIcon>
            <ListItemText primary={
              <Typography fontWeight={600}>
                  {props.item.title}
              </Typography>
            }/>

        </ListItemButton>
      </ListItem>
    );
  };



  const drawer = (
    <Box 
        padding={3}
        paddingBottom={0}
        display="flex"
        flexDirection="column"
        height="100vh"
        sx={{ "::webkit-scrollbar":{
                display: "none"
        }}}
    >
          <Box sx={{ textAlign: "center", mb:2}}>
              <Animate type="fade" delay={1}>
                  <img src={images.logo} alt="logo"  style={{
                    height: 'auto',
                    width: '220px', 
                    borderRadius:"10px",
                    padding:"30px",
                    bgcolor:"#e5f3ff",
                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                    }} />
              </Animate>
          </Box>

          <Animate sx={{ flexGrow: 1 }}>
            <Paper
              elevation={0}
              square
              sx={{
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                p: 2,
                height: "100%",
                bgcolor:"#e5f3ff",
                boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }}
            >
              <List>
                {menuList.map((item, index) => (
                  <MenuItem 
                    key={index}
                    item={item}
                    isActive={item.state === activeState}
                  />
                ))}
              </List>

              <List>
                <ListItem>
                  <Typography fontWeight={600} mt={1} color={colors.grey[600]}>
                        Services
                  </Typography>
                </ListItem>
                {serviceMenuList.map((item, index) => (
                  <MenuItem 
                    key={index}
                    item={item}
                    isActive={item.state === activeState}
                  />
                ))}
              </List>

              <List>
                <ListItem>
                  <Typography fontWeight={600} mt={1} color={colors.grey[600]}>
                        Investments
                  </Typography>
                </ListItem>
                {investmentMenuList.map((item, index) => (
                  <MenuItem 
                    key={index}
                    item={item}
                    isActive={item.state === activeState}
                  />
                ))}
              </List>
            </Paper>
          </Animate>

    </Box>
  )
  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 },
      }}
    >
   <Drawer
      variant="permanent"
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "block",
        },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: sidebarWidth,
          borderWidth: 0,
          bgColor: "transparent",
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
      open
    >
     
      {drawer}
    </Drawer>

    </Box>
  );
}
