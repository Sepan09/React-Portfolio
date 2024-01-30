import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
return (
  <div className='d-flex flex-column vh-100 pt-4 bg-success bg-gradient'>
    <Navbar />
    <div className='flex-grow-1 bg-dark-subtle'>
      <Outlet />
    </div>
    <Footer/>
  </div>
)
}

export default App
