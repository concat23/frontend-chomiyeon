import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../common/SideBar';


const sidebarWidth = 350; 
export const MainLayout = () => {
  return (
    <Box display='flex' >
        
        <Sidebar />

        <Box component='main'
             sx={ {
                flexGrow: 1,
                p:1, 
                height: "100vh",
                width: { sm: `calc(100% - ${sidebarWidth}px)`}
             }}
        >
            <Outlet />
        </Box>

    </Box>
  )
}
