import { AppBar, Box, Drawer, MenuItem, Toolbar, Typography } from "@mui/material";

export default function DashboardLayout({ children }){
    return(
        <Box sx={{display: 'flex'}}>
            <Drawer variant="permanent" sx={{width: 240}}>
                <MenuItem>Users</MenuItem>
                <MenuItem>Reports</MenuItem>
                <MenuItem>Analytics</MenuItem>
                <MenuItem>Feedback</MenuItem>
                <MenuItem>Settings</MenuItem>
            </Drawer>
            <Box component={'main'} sx={{flexGrow: 1, p: 3}}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant="h3">Admin Dashboard</Typography>
                    </Toolbar>
                </AppBar>
                {children}
            </Box>
        </Box>
    )
}