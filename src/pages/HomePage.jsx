import "./AboutMe.css";
import { Box, Avatar, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdWavingHand } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

export default function Home() {
    return (
        <Box 
        sx={{
            height: "auto",
            padding: "180px 0 300px",
            
        }}
        id= "HomePage"
        >
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
            variant="h1"
            sx={{ maxWidth: "500px", fontSize: "70px", fontWeight: 600 }}
            >
            Full-Stack Web Developer |  Frontend <MdWavingHand color="#D99058" />
            <Typography variant="subtitle1" sx={{ paddingTop: "6px" }}>
                Hi, im Sepan Mustafa, A Full-Stack Developer with passion for Frontend development based in TN,
                USA. <FaLocationDot />
            </Typography>
            <Link
                to="https://www.linkedin.com/in/sepan-mustafa-73b0412a4/"
                style={{
                textDecoration: "none",
                color: "black",
                fontSize: "38px",
                padding: "0 20px 0 0",
                }}
            >
                <FaLinkedin />
            </Link>
            <Link
                to="https://github.com/Sepan09"
                style={{ textDecoration: "none", color: "black", fontSize: "38px" }}
            >
                <FaGithub />
            </Link>
            </Typography>
            <Avatar
            alt="Remy Sharp"
            src="/sepan.jpg"
            sx={{ width: 300, height: 300 }}
            />
        </Grid>
        <Grid
            sx={{
            display: "flex",
            maxWidth: "700px",
            padding: "100px 0 0",
            justifyContent: "space-around",
            }}
        >
            <Typography
            sx={{
                fontSize: "20px",
                fontWeight: 500,
            }}
            >
            Tech Stack |
            </Typography>
            <FaHtml5
            color="#F06529"
            style={{ textDecoration: "none", fontSize: "31px" }}
            />
            <FaCss3Alt
            color="#264de4"
            style={{ textDecoration: "none", fontSize: "31px" }}
            />
            <SiJavascript
            color="#f0db4f"
            style={{
                textDecoration: "none",
                backgroundColor: "#323330",
                fontSize: "31px",
            }}
            />
            <FaReact
            color="#61DBFB"
            style={{ textDecoration: "none", fontSize: "31px" }}
            />
            <SiTailwindcss
            color="#66D3FA"
            style={{ textDecoration: "none", fontSize: "31px" }}
            />
            <GrMysql
            color="#00758F"
            style={{ textDecoration: "none", fontSize: "31px" }}
            />
            <SiMongodb
            color=" #3FA037"
            style={{ textDecoration: "none", fontSize: "31px" }}
            />
        </Grid>
        </Box>
    );
}
