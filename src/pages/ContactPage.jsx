import { Box, Grid, Typography } from "@mui/material";
import { SiMusicbrainz } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { Link } from "react-router-dom"

export default function Contact() {
    return (
        <Box
        sx={{
            height: "auto",
            padding: "200px 0px 700px",
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
            Portfolio
            </Typography>
            <Typography
            sx={{
                color: "black",
                fontWeight: 800,
                fontSize: "25px",
            }}
            >
            Each Project is a unique peace of development 
            <SiMusicbrainz
                color="#089145"
                style={{
                textDecoration: "none",
                fontSize: "40px",
                padding: "0 0 0 8px",
                }}
            />
            </Typography>
            <Grid
            sx={{
                display: "flex",
                padding: "60px 20px 0",
            }}
            >
            <img
                alt="Laptop"
                src="/Project3.png"
                style={{ borderRadius: "20px" }}
                width={620}
                height={440}
            />
            <Typography
                sx={{
                padding: "0 0 0 100px",
                color: "#f0db4f",
                fontWeight: 700,
                fontSize: "20px",
                textAlign: "center",
                }}
            >
                <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: 700,
                    color: "black",
                    paddingTop: "30px",
                    fontSize: "22px",
                }}
                >
                    Career Cache <IoIosBook style={{ textDecoration: "none", color: "#9A5944", fontSize: "31px", padding: "0 0 0 7px"}}/>
                </Typography>
                <Typography
                variant="subtitle1"
                sx={{
                    color: "black",
                    paddingTop: "6px",
                }}
                >
                Career Cache is an website made to assist in the job search.
                Allows the user to save jobs that they have found on other websites 
                and store them for later use.
                The main goal of this application is to consolidate all of a
                user active job applications into one place.
                </Typography>
                <Typography sx={{
                    color: "black",
                    padding: "30px 110px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: "20px"
                    }}>
                    React
                    </Typography>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: "20px"
                    }}>
                    MUI
                    </Typography>
                </Typography>
                <Typography sx={{
                    color: "black",
                    padding: "60px 70px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Typography sx={{
                        fontWeight: 600,
                        fontSize: "20px"
                    }}>
                    Code 
                    <Link to="https://github.com/iambryantran/deck">
                    <FaGithub style={{ textDecoration: "none", color: "black", fontSize: "31px", padding: "0 0 0 7px"}}/>
                    </Link>
                    </Typography>
                    <Typography sx={{
                        fontWeight: 600,
                        fontSize: "20px",
                    }}>
                    Live Demo
                    <Link to="https://career-cache.onrender.com" >
                    <FaExternalLinkAlt style={{ textDecoration: "none", color: "black", fontSize: "29px", padding: "0 0 0 7px" }}/>
                    </Link>
                    </Typography>
                </Typography>
            </Typography>
            </Grid>
        </Grid>
        </Box>
    );
}
