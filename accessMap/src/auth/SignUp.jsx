import { Box, Button, Container, Link, MenuItem, Paper, TextField, Typography } from "@mui/material";
import Logo from '../assets/Images/Logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//List of User Roles
const roles = [
    "PWD User", "Service Provider", "Government Official", "Admin"
]

const SignUp = () =>{
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '', role: 'PWD User', email: '', password: ''
    });
    
    return(
        <>
        <img src={Logo} height={'120px'} onClick={() => navigate('/')} />
        <Container component={Paper}  elevation={3} maxWidth= 'md' sx={{display: 'flex',p: 3, flexDirection: 'column', alignItems: 'center', pt: 0, height: '100vh'}}>
            <Typography  variant="h3" fontWeight={'bold'}  color="#ee0e0eff">
                AccessMap Kenya
            </Typography>
            <Typography variant="caption1" gutterBottom>
                <font face="monotype corsiva">Inform. Empower. Include</font>
            </Typography>
            <Box component="form" sx={{mt: 6, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3}}>
                
                <TextField label="Full Name" type="text" value={form.name} sx={{width: {xs: '100%', lg: '50%'} }} 
                onChange={(e) => setForm({...form, name: e.target.value})}/>
                <TextField select label="Select Role" value={form.role} sx={{width: {xs: '100%', lg: '50%'} }}
                onChange={(e) => setForm({...form, role: e.target.value})}>
                    {roles.map((r)=> (
                        <MenuItem key={r} value={r}>
                            {r}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField label="Email" type="email" value={form.email} sx={{width: {xs: '100%', lg: '50%'} }} 
                onChange={(e) => setForm({...form, email: e.target.value})}/>
                <TextField label="Password" type="password" value={form.password} sx={{width: {xs: '100%', lg: '50%'} }}
                onChange={(e) => setForm({...form, password: e.target.value})} />

                <Button variant="contained" sx={{textTransform: 'none', width: {xs: '100%', lg: '50%'}, bgcolor: '#ee0e0eff'}}>Sign Up</Button>
                <Typography variant="h5">
                    Already have an account?  
                    <Link href='/log-in' sx={{textDecoration: 'none'}}>Log In</Link>
                </Typography>
            </Box>
        </Container>
        </>
    )
}

export default SignUp;