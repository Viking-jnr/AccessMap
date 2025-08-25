import { Box, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
    return(
        <>
        <Box component="footer" 
        sx={{py: 3, mt: 4, px: 2, backgroundColor: '#D3D3D3'}}>
            <Grid container spacing={4} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" fontWeight={'bold'}  color="#ee0e0eff">
                        AccessMap Kenya
                    </Typography>
                    <Typography variant="caption1" gutterBottom color='black' sx={{ fontFamily: "Brush Script MT, cursive" }}>
                        Inform. Empower. Include
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2} justifyContent={'center'}>
                        <Grid item>
                            <Link href="/" color="inherit" underline="hover">Home</Link>
                        </Grid>
                        <Grid item>
                            <Link href="/about" color="inherit" underline="hover">About</Link>
                        </Grid>
                        <Grid item>
                            <Link href="/contact" color="inherit" underline="hover">Contact</Link>
                            </Grid>
                            <Grid item>
                            <Link href="/privacy" color="inherit" underline="hover">Privacy</Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2} justifyContent={'center'}>
                        <Grid item>
                            <Link href="/report-barrier" color="inherit" underline="hover">Report Barrier</Link>
                        </Grid>
                        <Grid item>
                            <Link href="/maps" color="inherit" underline="hover">View Maps</Link>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
        <Box bgcolor={'#D3D3D3'} textAlign={'center'}>
            <Typography variant="caption1" sx={{mt: 7}}>
                &copy; {new Date().getFullYear()} AccessMap Kenya. All Rights Reserved
            </Typography>
        </Box>
    </>
    )
}

export default Footer;