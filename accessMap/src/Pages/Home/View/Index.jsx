import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Hero from '../../../assets/Images/Hero.jpg';
import { useNavigate } from "react-router-dom";
import Header from "../../../assets/Components/Header";
import Fade from "../../../assets/Components/Fade";


//Styled components
const Styles = {
    Button: {
        backgroundColor: '#f55f0a',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#ee0e0eff',
            color: 'white'
        }
    },
    secondary: {
        color: 'black',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#ee0e0eff',
            color: 'white'
        }
    }
}

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
        <Header />
        <Container maxWidth={'100vw'} mt={20} mb={5} >
            <Box mt={20} sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, }}>
                <Box sx={{display: 'flex',flexDirection: 'column', width: {xs: '100%', lg: '40%'}, textAlign: 'center'}}>
                    {/*Added a fade component to delay visibility of some content */}
                    <Fade delay={0.8}>
                    <Typography variant="h3" fontWeight={'bold'}  color="#ee0e0eff">
                        AccessMap Kenya
                    </Typography>
                    <Typography variant="caption1" gutterBottom>
                        <font face="monotype corsiva">Inform. Empower. Include</font>
                    </Typography>
                    <Typography variant="subtitle1">
                        Helping everyone access services with confidence<br />
                        Disability is not inability and we are here to ensure no one is 
                        physically limited to access services at different locations.
                    </Typography>
                    </Fade>

                    <Fade delay={1.5}>
                    <Grid container spacing={2} justifyContent="center" mt={3}>
                        <Grid item>
                        <Button variant="contained" onClick={() => navigate('/log-in')} sx={Styles.Button}>
                            Report Barrier
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" onClick={() => navigate('/directory')} sx={Styles.secondary}>
                            Search Directory
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" onClick={() => navigate('/map')} sx={Styles.secondary}>
                            View Maps
                        </Button>
                        </Grid>
                    </Grid>
                    </Fade>
                </Box>
                <Box sx={{width: {xs: '100%', lg: '60%'}}} >
                    <img src={Hero} alt="PWD" title="Accessibility for PWD" style={{height: 300, width: '100%'}}/>
                </Box>
            </Box>
            <Box mt={10} gap={5} sx={{textAlign: 'center'}}>
                <Typography variant="h4">
                    Are you a Service Provider or Government Official?
                </Typography>
                <Button variant="contained" sx={{bgcolor: '#f55f0a', textTransform: 'none'}} onClick={() => navigate('/log-in')} >
                    Go to Dashboard
                </Button>
            </Box>
        </Container>
        </>
    )
}