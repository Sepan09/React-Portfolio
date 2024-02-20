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
                <a href='#HomePage' style={{textDecoration: "none", color: "black"}}>Home</a>
                </Button>
    
                <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500" }}>
                <a href='#AboutPage' style={{textDecoration: "none", color: "black"}}>About</a> 
                </Button>
    
                <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500" }}>
                <a href='#ProjectPage' style={{textDecoration: "none", color: "black"}}>Project</a>
                </Button>
    
                <Button variant="h6" component="div" sx={{ flexGrow: 1, color: "black", fontWeight: "500", }}>
                <a href='#ContactPage' style={{textDecoration: "none", color: "black"}}>Contact</a>
                </Button>
                </Box>
    
            </Toolbar>
            </AppBar>
        </Box>
    );
    }