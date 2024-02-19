import { Link,} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1, display: "flex"}}>
            <AppBar sx={{ backgroundColor: "#fff" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "700" }}>
                Sepan Mustafa
                </Typography>
                <Box sx={{ display: "flex", maxWidth: "300px", }}>
                <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500",}}>
                <Link to='/' style={{textDecoration: "none", color: "black"}}>Home</Link>
                </Button>
    
                <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500" }}>
                <Link to='/About' style={{textDecoration: "none", color: "black"}}>About</Link> 
                </Button>
    
                <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500" }}>
                <Link to='/Project' style={{textDecoration: "none", color: "black"}}>Project</Link>
                </Button>
    
                <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500", }}>
                <Link to='/Contact' style={{textDecoration: "none", color: "black"}}>Contact</Link>
                </Button>
                </Box>
    
            </Toolbar>
            </AppBar>
        </Box>
    );
    }