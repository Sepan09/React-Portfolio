import './AboutMe.css'
import  { Box,Avatar, Grid, Typography  } from "@mui/material"
import { MdWavingHand } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function Home() {
        return (
        <Box sx={{height: "auto"}}>
            <Grid sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant="h1" sx={{maxWidth: "500px", fontSize: "50px", fontWeight: 600}}>
                Full-Stack Web Developer <MdWavingHand />
                <Typography variant="subtitle1" sx={{paddingTop: "6px"}}>
                    Hi, im Sepan Mustafa, A passionate Full-Stack Developer based in TN, USA. <FaLocationDot />
                </Typography>
            </Typography>
            <Avatar alt="Remy Sharp" src="/sepan.jpg" sx={{width: 200, height: 200 }}/>
            </Grid>
            {/* <Typography variant="subtitle2" sx={{maxWidth: "500px"}}>
                Hi, im Sepan Mustafa, A passionate Full-Stack Developer based in TN, USA.
            </Typography> */}
            
        </Box>
        );
    }