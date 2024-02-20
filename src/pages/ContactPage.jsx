import { Box, Grid, Typography } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default function Contact() {
    return (
        <Box
        sx={{
            height: "auto",
            padding: "100px 0px 400px",
            display: "flex",
        }}
        id="ContactPage"
        >
        <Grid sx={{}}>
            <Typography
            sx={{
                color: "#f0db4f",
                fontWeight: 700,
                fontSize: "20px",
            }}
            >
                Contact 
            </Typography>
            <Typography sx={{
                padding: "8px 0 0 0",
                fontSize: "30px",
                fontWeight: 800,

            }}>
                Feel Free to hit me up !
            </Typography>
            <Box sx={{
                padding: "80px 50px 0 ",
                justifyContent: "space-around"
            }}>
                <Box sx={{display: "flex"}}>
                    <MdEmail style={{fontSize: "60px", color: "#f0db4f"}}/>
                <Typography sx={{
                    fontSize: "25px",
                    fontWeight: 700,
                    padding: "0 20px 0"
                }}>
                    Email
                <Typography >
                    Sepanmustafa@gmail.com
                </Typography>
                </Typography>
                <Box sx={{display: "flex"}}>
                    <FaLocationDot style={{fontSize: "60px", color: "#f0db4f"}}/>
                <Typography sx={{
                    fontSize: "25px",
                    fontWeight: 700,
                    padding: "0 20px 0"
                }}>
                    Location
                <Typography >
                    TN, USA
                </Typography>
                </Typography>
                </Box>
                </Box>

            </Box>
        </Grid>
        </Box>
    );
}
