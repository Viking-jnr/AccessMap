import { Box, Button, Container, Link, MenuItem, Paper, TextField, Typography } from "@mui/material";
import Logo from '../assets/Images/Logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { useAuth } from "../Context/authContext";

//List of User Roles
const roles = [
    "PWD User", "Service Provider", "Government Official", "Admin"
]

const Login = () =>{
    const navigate = useNavigate();
    const [form, setForm] = useState({
        role: 'PWD User', email: '', password: ''
    });
    const { setUser } = useAuth();

    const handleLogin = async () => {
        const response = await axios.post('http://localhost:4000/auth/login', form);
        const { token, user } = response.data;
        setUser(user); //set the user globally

        //store the token and the user locally
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        //Redirect based on user role
        if (user.role === 'Admin'){
            navigate('/admin-dashboard');
        }
        else if (user.role === 'Government Official'){
            navigate('/government-dashboard')
        }
        else if (user.role === 'Service Provider'){
            navigate('/provider-dashboard')
        }
        else if (user.role === 'PWD User'){
            navigate('/report-barrier')
        }
        else {
            console.log('Invalid role')
        }
    }
    
    return(
        <>
        <img src={Logo} height={'120px'} onClick={() => navigate('/')} />
        <Container component={Paper}  elevation={3} maxWidth= 'md' sx={{display: 'flex',p: 3, flexDirection: 'column', alignItems: 'center', pt: 0, height: '100vh'}}>
            <Typography  variant="h3" fontWeight={'bold'}  color="#ee0e0eff">
                AccessMap Kenya
            </Typography>
            <Typography variant="caption1" gutterBottom color='black' sx={{ fontFamily: "Brush Script MT, cursive" }}>
                Inform. Empower. Include
            </Typography>
            <Box component="form" sx={{mt: 6, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3}}>
                <TextField select label="Select Role" value={form.role} sx={{width: {xs: '100%', lg: '50%'} }}
                onChange={(e) => setForm({...form, role: e.target.value})}>
                    {roles.map((r)=> (
                        <MenuItem key={r} value={r}>
                            {r}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField label="Email" type="email" value={form.email} sx={{width: {xs: '100%', lg: '50%'} }} onChange={(e) => setForm({...form, email: e.target.value})}/>
                <TextField label="Password" type="password" value={form.password} sx={{width: {xs: '100%', lg: '50%'} }}
                onChange={(e) => setForm({...form, password: e.target.value})} />

                <Button variant="contained" sx={{textTransform: 'none', width: {xs: '100%', lg: '50%'}, bgcolor: '#ee0e0eff'}}
                onClick={handleLogin}>
                    Log In
                </Button>
                <Typography variant="h5">
                    Don't have an account?  
                    <Link href='/sign-up' sx={{textDecoration: 'none'}}>Sign Up</Link>
                </Typography>
            </Box>
        </Container>
        </>
    )
}

export default Login;