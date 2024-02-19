// import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/HomePage.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Project from './pages/ProjectPage.jsx';
import Contact from './pages/ContactPage.jsx';
import  { Box, Container } from "@mui/material"

function App() {
return (
  <Box  sx={
    {display: "flex",
    flexDirection: "column",
    height: "vh-100",
    // padding: "200px 540px 30px",
    boxSizing: "border-box"}}>
    <Navbar />
    <Container maxWidth="md" sx={{
      backgroundColor: "grey",
      padding: "300px 0px 0px"
      }}>
      <Home/>
      <AboutMe />
      <Project />
      <Contact />
    </Container>
    <Footer/>
  </Box>
)
}

export default App
