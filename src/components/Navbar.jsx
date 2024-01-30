import { Link, useLocation} from 'react-router-dom';


const NavTabs = () => {
    const currentPage = useLocation().pathname;

    return (
        <div className='d-flex justify-content-between align-items-center'>
            <h1 className='d-flex justify-content-start'>Sepan</h1>
            <ul className='nav d-flex justify-content-end'>
                <li className='nav-item'>
                    <Link
                        to="/"
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >
                        AboutMe
                    </Link>
                </li>
                <li className='Nav-item'>
                    <Link
                        to='/Portfolio'
                        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className='Nav-item'>
                    <Link
                        to='/Contact'
                        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </Link>
                </li>
                <li className='Nav-item'>
                    <Link
                        to='/Resume'
                        className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavTabs