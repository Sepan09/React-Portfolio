import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
// import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/HomePage.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Project from './pages/ProjectPage.jsx';
import Contact from './pages/ContactPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'About',
        element: <AboutMe />,
      },
      {
        path: 'Project',
        element: <Project />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
