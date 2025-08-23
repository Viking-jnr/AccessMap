import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext"
import { Button } from "@mui/material";

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
        <div>
            <h2> Report Barrier</h2>
        </div>
    )
}

export default Report;