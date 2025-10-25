import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext"
import { Button, Container, MenuItem, Slider, TextField, Typography } from "@mui/material";
import Header from "../assets/Components/Header";
import { useState } from "react";

//Different types of barriers
const barrierType = ['Physical', 'Digital', 'Attitudinal', 'Communicational', 'Other']

const Report = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        type: '',
        description: '',
        severity: 3,
        location: ''
    })

    const handleChange = (e) => {
        const {name, value, type} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'file' ? e.target.files[0]: value
        }))
    };

    
    //check if user is stored in global state
    if (!user){
        return (
            <div style={{padding: 5}}>
                <h3>You have to log in first before you can report a barrier</h3>
                <Button sx={{backgroundColor: '#ee0e0eff', color: 'white'}} onClick={()=> navigate('/log-in')}>
                    Go to Login
                </Button>

                <Typography mt={2} variant="h5">
                    Don't have an account?  
                    <Link to={'/sign-up'} sx={{textDecoration: 'none'}}>Sign Up</Link>
                </Typography>
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

            <form style={{marginTop: 20}} >
                <TextField 
                select fullWidth required onChange={handleChange}
                label='Barrier Type' name="type" value={formData.type}>
                    {barrierType.map((option)=>(
                        <MenuItem key={option} value={option}> {option} </MenuItem>
                    ))}
                </TextField>
                <TextField label='Description' name="description" required value={formData.description}
                multiline rows={3} margin="normal" fullWidth onChange={handleChange} />

                <Typography gutterBottom>Severity</Typography>
                <Slider name="severity" value={formData.severity}
                onChange={(e, val) => setFormData(prev => ({ ...prev, severity: val }))}
                step={1} marks min={1} max={10} valueLabelDisplay="auto"
                sx={{
                    color: '#1e2a78', 
                    height: 8,
                    '& .MuiSlider-thumb': {
                    backgroundColor: '#1e2a78', // Custom thumb color
                    },
                    '& .MuiSlider-track': {
                    backgroundColor: '#424c8cff', // Track color
                    },
                    '& .MuiSlider-rail': {
                    backgroundColor: '#3c4784ff', // Rail color
                    }
                }} />

                <TextField label='Location or Address' name="location" value={formData.location} required
                onChange={handleChange} fullWidth />

                <Button variant="outlined" component= 'label' sx={{mt: 2, textTransform: 'none'}}>
                    Upload Photo or Video
                    <input type='file' name='media' hidden onChange={handleChange} />
                </Button>

            </form>
        </Container>
        </>
    )
}

export default Report;