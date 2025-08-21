import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import Logo from '../Images/Logo.png'
import { useNavigate } from "react-router-dom"

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
    return(
        <AppBar position="static" sx={{bgcolor: '#1e2a78', display: 'flex', pl: 0, ml: 0, width: '100vw'}}>
            <Toolbar sx={{maxWidth:'100vw', pl: 0}}>
                <Box sx={{display: 'flex', width: '20%', m: 0, pl: 0}}>
                  <img src={Logo} alt="AccessMap Kenya" height={'100px'} style={{marginLeft: 0}}/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'row', flex: 1}}>
                    <Box sx={{display: 'flex', gap: 3}}>
                        <Button sx={Styles.NavButton} onClick={()=> navigate('/')}>Home</Button>
                        <Button sx={Styles.NavButton}>About</Button>
                        <Button sx={Styles.NavButton}>Report Barrier</Button>
                        <Button sx={Styles.NavButton}>Maps</Button>
                        <Button sx={Styles.NavButton}>Contacts</Button>
                    </Box>
                    <Box flexGrow={1} />
                    <Box display={'flex'} gap={3}>
                        <Button sx={Styles.NavButton} onClick={()=> navigate('/log-in')}>Log In</Button>
                        <Button sx={Styles.NavButton} onClick={()=> navigate('/sign-up')}>Sign Up</Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;