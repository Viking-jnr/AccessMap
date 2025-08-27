import { Menu } from "@mui/icons-material";
import { AppBar, Box, Drawer, IconButton, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export default function DashboardLayout({ children }){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [isOpen, setIsOpen] = useState(false);
    return(
        <Box sx={{display: 'flex'}}>
            <Drawer variant={isMobile ? "temporary" : "permanent"} sx={{width: 100}}>
                <MenuItem>Users</MenuItem>
                <MenuItem>Reports</MenuItem>
                <MenuItem>Analytics</MenuItem>
                <MenuItem>Feedback</MenuItem>
                <MenuItem>Settings</MenuItem>
            </Drawer>
            <Box component={'main'} sx={{flexGrow: 1}}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant="h3" align="center">Admin</Typography>
                        <IconButton sx={{display: {md: 'none'}}} onClick={() => setIsOpen(!isOpen)}>
                            <Menu sx={{color:'white'}}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {children}
            </Box>
        </Box>
    )
}