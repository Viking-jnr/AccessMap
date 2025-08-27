import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext"
import { Button, Container, Typography } from "@mui/material";
import Logo from '../assets/Images/Logo.png'
import Header from "../assets/Components/Header";

const Report = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    
    //check if user is stored in global state
    if (!user){
        return (
            <div style={{padding: 5}}>
                <h3>You have to log in first before you can report a barrier</h3>
                <Button sx={{backgroundColor: '#ee0e0eff', color: 'white'}} onClick={()=> navigate('/log-in')}>
                    Go to Login
                </Button>
            </div>
        )
    }
    return(
        <>
        <Header />
        
        <Container maxWidth='md'>
            <Typography variant="h3" gutterBottom align="center"> Report a Barrier</Typography>
            <Typography variant="body1" align="center">
                Help improve accessibility by reporting barriers you encounter.
            </Typography>
        </Container>
        </>
    )
}

export default Report;