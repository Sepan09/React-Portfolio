import { Box, Grid, Typography } from "@mui/material";
import { SiMusicbrainz } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { Link } from "react-router-dom";
import { CgGames } from "react-icons/cg";
import { FaPaw } from "react-icons/fa";

export default function Project() {
    return (
        <Box
        sx={{
            height: "auto",
            padding: "200px 0px 200px",
            display: "flex",
        }}
        id="ProjectPage"
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
                Career Cache{" "}
                <IoIosBook
                    style={{
                    textDecoration: "none",
                    color: "#9A5944",
                    fontSize: "31px",
                    padding: "0 0 0 7px",
                    }}
                />
                </Typography>
                <Typography
                variant="subtitle1"
                sx={{
                    color: "black",
                    paddingTop: "6px",
                }}
                >
                Career Cache is an website made to assist in the job search.
                Allows the user to save jobs that they have found on other
                websites and store them for later use. The main goal of this
                application is to consolidate all of a user active job
                applications into one place.
                </Typography>
                <Typography
                sx={{
                    color: "black",
                    padding: "30px 110px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                <Typography
                    sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    }}
                >
                    React
                </Typography>
                <Typography
                    sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    }}
                >
                    MUI
                </Typography>
                </Typography>
                <Typography
                sx={{
                    color: "black",
                    padding: "60px 70px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                <Typography
                    sx={{
                    fontWeight: 600,
                    fontSize: "20px",
                    }}
                >
                    Code
                    <Link to="https://github.com/iambryantran/deck">
                    <FaGithub
                        style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "31px",
                        padding: "0 0 0 7px",
                        }}
                    />
                    </Link>
                </Typography>
                <Typography
                    sx={{
                    fontWeight: 600,
                    fontSize: "20px",
                    }}
                >
                    Live Demo
                    <Link to="https://career-cache.onrender.com">
                    <FaExternalLinkAlt
                        style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "29px",
                        padding: "0 0 0 7px",
                        }}
                    />
                    </Link>
                </Typography>
                </Typography>
            </Typography>
            </Grid>
            <Grid
            sx={{
                display: "flex",
                padding: "200px 20px 0",
            }}
            >
            <Typography
                sx={{
                padding: "0 100px 0 0px",
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
                Game Release{" "}
                <CgGames
                    style={{
                    textDecoration: "none",
                    color: "brown",
                    fontSize: "35px",
                    padding: "0 0 0 7px",
                    }}
                />
                </Typography>
                <Typography
                variant="subtitle1"
                sx={{
                    color: "black",
                    paddingTop: "6px",
                }}
                >
                To demonstrate our skills as new developers our first project was Game Release. Its a game release
                calender thats meant for all gamers to search and store their games in a library. The main objective of
                this project is to demonstrate our knowledge of various skills
                such as using a CSS framework, using
                multiple server side APIs, responsiveness, client side storage,
                interactivity, modals, and collaboration.
                </Typography>
                <Typography
                sx={{
                    color: "black",
                    padding: "30px 100px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                <Typography
                    sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    }}
                >
                    JavaScript
                </Typography>
                <Typography
                    sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    }}
                >
                    NES
                </Typography>
                </Typography>
                <Typography
                sx={{
                    color: "black",
                    padding: "60px 70px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                <Typography
                    sx={{
                    fontWeight: 600,
                    fontSize: "20px",
                    }}
                >
                    Code
                    <Link to="https://github.com/iambryantran/game-release-calendar">
                    <FaGithub
                        style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "31px",
                        padding: "0 0 0 7px",
                        }}
                    />
                    </Link>
                </Typography>
                <Typography
                    sx={{
                    fontWeight: 600,
                    fontSize: "20px",
                    }}
                >
                    Live Demo
                    <Link to="https://iambryantran.github.io/game-release-calendar/">
                    <FaExternalLinkAlt
                        style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "29px",
                        padding: "0 0 0 7px",
                        }}
                    />
                    </Link>
                </Typography>
                </Typography>
            </Typography>
            <img
                alt="Laptop"
                src="/Project1.png"
                style={{ borderRadius: "20px" }}
                width={620}
                height={440}
            />
            </Grid>
            <Grid
            sx={{
                display: "flex",
                padding: "200px 20px 0",
            }}
            >
            <img
                alt="Laptop"
                src="/Project2.png"
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
                Paw Fit
                <FaPaw
                    style={{
                    textDecoration: "none",
                    color: "#9A5944",
                    fontSize: "31px",
                    padding: "0 0 0 9px",
                    }}
                />
                </Typography>
                <Typography
                variant="subtitle1"
                sx={{
                    color: "black",
                    paddingTop: "6px",
                }}
                >
                Paw Fit a web application to keep track of all your furry friends health and data records.
                Allows the user to input and save a variety of pets they own.
                They can also keep track of their furry pets flu shots, any allergy they have, 
                and track their activity throughout the day. The main goal of this
                application is to make daily activity with pets easy and not have to stress about their wellness
                </Typography>
                <Typography
                sx={{
                    color: "black",
                    padding: "30px 110px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                <Typography
                    sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    }}
                >
                    MVC
                </Typography>
                <Typography
                    sx={{
                    fontWeight: 700,
                    fontSize: "20px",
                    }}
                >
                    Bootstrap
                </Typography>
                </Typography>
                <Typography
                sx={{
                    color: "black",
                    padding: "60px 70px 0",
                    display: "flex",
                    justifyContent: "space-between",
                }}
                >
                <Typography
                    sx={{
                    fontWeight: 600,
                    fontSize: "20px",
                    }}
                >
                    Code
                    <Link to="https://github.com/brandonlambrecht/paw-fit?tab=readme-ov-file">
                    <FaGithub
                        style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "31px",
                        padding: "0 0 0 7px",
                        }}
                    />
                    </Link>
                </Typography>
                <Typography
                    sx={{
                    fontWeight: 600,
                    fontSize: "20px",
                    }}
                >
                    Live Demo
                    <Link to="https://thawing-bastion-63318-3c68bfecd820.herokuapp.com/">
                    <FaExternalLinkAlt
                        style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: "29px",
                        padding: "0 0 0 7px",
                        }}
                    />
                    </Link>
                </Typography>
                </Typography>
            </Typography>
            </Grid>
        </Grid>
        </Box>
    );
}
