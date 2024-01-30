import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
// import ErrorPage from './pages/ErrorPage.jsx';
import AboutMe from './pages/AboutMePage.jsx';
// import Portfolio from './pages/PortfolioPage.jsx';
import Contact from './pages/ContactPage.jsx';
import Resume from './pages/ResumePage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      // {
      //   path: 'Portfolio',
      //   element: <Portfolio />,
      // },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
