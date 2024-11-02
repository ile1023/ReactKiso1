import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <header className='header'>
            <p>掲示板</p>
            <div className='button'>
                <Link to='/threads/new'>スレッドを立てる</Link>
            </div>
           
        </header>
    )
}

export default Header;