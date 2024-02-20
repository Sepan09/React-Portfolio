import { Box, Grid, Typography } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutMe() {
    return (
        <Box
        sx={{
            height: "auto",
            padding: "500px 0px 700px",
        }}
        id="AboutPage"
        >
        <Grid
            sx={{
            display: "flex",
            }}
        >
            <img alt="Laptop" src="/AboutMe.jpg" style={{ borderRadius: "20px" }} />
            <Typography
            sx={{
                padding: "0 0 0 100px",
                color: "#f0db4f",
                fontWeight: 700,
                fontSize: "20px",
            }}
            >
            About Me
            <Typography
                variant="subtitle1"
                sx={{
                fontWeight: 700,
                color: "black",
                paddingTop: "3px",
                fontSize: "22px",
                }}
            >
                A dedicated and passionate Full-Stack Web Developer based in TN, USA.
                <FaLocationDot />
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                color: "black",
                paddingTop: "6px",
                }}
            >
                As a junior Full-Stack Developer, I possess a diverse arsenal of
                skills in HTML, CSS, javaScript, React, Tailwind, mySQL, mongoDB,
                and MERN stack. I take pride in my ability to collaborate
                effectively within cross-functional teams, leveraging my strong
                communication skills to translate technical concepts into actionable
                strategies. My commitment to continuous learning ensures that I stay
                ahead of industry trends and emerging technologies, allowing me to
                deliver cutting-edge solutions that exceed expectations.
            </Typography>
            </Typography>
        </Grid>
        </Box>
    );
}
