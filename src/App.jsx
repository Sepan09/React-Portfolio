import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
return (
  <div className='d-flex flex-column vh-100'>
    <Navbar />
    <div className='flex-grow-1'>
      <Outlet />
    </div>
    <Footer/>
  </div>
)
}

export default App
