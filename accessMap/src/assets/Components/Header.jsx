import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material"
import Logo from '../Images/Logo.png'
import { useNavigate } from "react-router-dom"
import { Close, ContactMail, Home, Logout, Map, Menu as MenuIcon, More, ReportProblem } from '@mui/icons-material'
import { useAuth } from "../../Context/authContext"
import { useState } from "react"

//Styled compnents
const Styles = {
    NavButton: {
        color: '#fcf7f7ff',
        textTransform: 'none',
        '&:hover':{
            backgroundColor: '#ee0e0eff',
            color: '#fcf7f7ff'
        }
    }
}

const Header = () => {
    const navigate= useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    //A drawer for mobile navigation
    const [isOpen, setIsOpen] = useState(false);
    const handleDrawer = () => {
        setIsOpen(!isOpen);
    }
    
    //To check if a user is logged in
    const {user, logout } = useAuth();

    //To logout a user
    const handleLogout =() => {
        logout();
        navigate('/log-in');
    }

    return(
        <>
        <AppBar position="static" sx={{bgcolor: '#1e2a78', display: 'flex', pl: 0, ml: 0, width: '100vw'}}>
            <Toolbar sx={{maxWidth:'100vw', pl: 0}}>
                <Box sx={{display: 'flex', width: '20%', m: 0, pl: 0}}>
                  <img src={Logo} alt="AccessMap Kenya" height={'100px'} style={{marginLeft: 0}}/>
                </Box>
                {/*Menu Icon for navigation in mobile*/}
                {isMobile && (
                    <>
                    <Box flexGrow={1} />
                    <IconButton onClick={handleDrawer}>
                        {isOpen ? <Close sx={{color: 'white'}} /> : <MenuIcon sx={{color: 'white'}}/> }
                    </IconButton>
                    </>
                )}
                {!isMobile && (
                <Box sx={{display: 'flex', flexDirection: 'row', flex: 1}}>
                    <Box sx={{display: 'flex', gap: 3}}>
                        <Button startIcon={<Home />} sx={Styles.NavButton} onClick={()=> navigate('/')}>Home</Button>
                        <Button sx={Styles.NavButton}>About</Button>
                        <Button sx={Styles.NavButton}>Report Barrier</Button>
                        <Button startIcon={<Map />} sx={Styles.NavButton}>Maps</Button>
                        <Button sx={Styles.NavButton}>Contacts</Button>
                    </Box>
                    <Box flexGrow={1} />
                    {user && (
                        <Button sx={Styles.NavButton} onClick={handleLogout}>Log Out</Button>
                    )}

                    {!user && (
                    <Box display={'flex'} gap={3}>
                        <Button sx={Styles.NavButton} onClick={()=> navigate('/log-in')}>Log In</Button>
                        <Button sx={Styles.NavButton} onClick={()=> navigate('/sign-up')}>Sign Up</Button>
                    </Box>
                    )}
                </Box>
                )}
            </Toolbar>
        </AppBar>

        {/*Drawer for Mobile navigation*/}
        <Drawer anchor="left" open={isOpen} onClose={handleDrawer} >
            <Box sx={{ width: 250, bgcolor: '#1e2a78', height: '100%' }} role="presentation" onClick={handleDrawer} onKeyDown={handleDrawer}>
                <img src={Logo} alt="AccessMap Kenya" width={'100%'} height={'200px'} />

                <List>
                    <ListItemButton  onClick={() => navigate('/')} sx={{...Styles.NavButton, gap: 1}}>
                        <Home />
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItem button onClick={() => navigate('/about')} sx={{...Styles.NavButton, gap: 1}}>
                        <More />
                        <ListItemText primary="About" />
                    </ListItem>
                    {user && user.role !== "PWD User" && (
                    <ListItem button onClick={() => navigate('/report-barrier')} sx={{...Styles.NavButton, gap: 1}}>
                        <ReportProblem />
                        <ListItemText primary="Report Barrier" />
                    </ListItem>
                    )}
                    <ListItem button onClick={() => navigate('/maps')} sx={{...Styles.NavButton, gap: 1}}>
                        <Map />
                        <ListItemText primary="Maps" />
                    </ListItem>
                    <ListItem button onClick={() => navigate('/contacts')} sx={{...Styles.NavButton, gap: 1}}>
                        <ContactMail />
                        <ListItemText primary="Contacts" />
                    </ListItem>
                    {user && (
                    <ListItemButton sx={{backgroundColor: '#ee0e0eff', color: 'white', textTransform: 'none'}} onClick={handleLogout}>
                        <Logout />
                        <ListItemText primary="Log Out" />
                    </ListItemButton>
                )}
                </List>

                
                {!user && (
                <Box display={'flex'} gap={3} p={2}>
                    <Button sx={{backgroundColor: '#ee0e0eff', color: 'white', textTransform: 'none'}} onClick={()=> navigate('/log-in')}>Log In</Button>
                    <Button variant="outlined" sx={Styles.NavButton} onClick={()=> navigate('/sign-up')}>Sign Up</Button>
                </Box>
                )}
                
            </Box>
        </Drawer>
        </>
    )
}

export default Header;