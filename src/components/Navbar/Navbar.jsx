import './Navbar.scss'
import logo from '../../assets/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
            <img src={logo} alt='LOGO'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/limpieza' className="navbar__link">juguetes</Link>
                    <Link to='/asdfasf' className="navbar__link">Hamacas</Link>
                </nav>
                <CartWidget />
            </div>

        </header>
    )
}