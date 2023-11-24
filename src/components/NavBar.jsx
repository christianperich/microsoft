import logo from '../assets/logo.png'
import './NavBar.css'
import { VscSearch } from "react-icons/vsc";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export function NavBar() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive) 
    }

    return(
        <div className='nav-container'>
            <div className='hamburger icons'>
                <div onClick={handleClick}>{isActive ? <MdClose /> : <GiHamburgerMenu /> }</div>
                <div title='Buscar en Microsoft.com'><VscSearch /></div>
            </div>
            <img src={logo} alt="" className='left'/>
            <ul className={isActive ? 'nav-items center active' : 'nav-items center'}>
                <li><a href="">Microsoft 365</a></li>
                <li><a href="">Teams</a></li>
                <li><a href="">Copilot</a></li>
                <li><a href="">Windows</a></li>
                <li><a href="">Xbox</a></li>
                <li><a href="">Soporte</a></li>
            </ul> 
            <ul className='nav-items right'>
                <li className='mobile'><a href="">Todo Microsoft</a></li>
                <li className='icons mobile' title='Buscar en Microsoft.com'><VscSearch /></li>
                <li className='icons' title='0 artículos en el carro de compra'><MdOutlineShoppingCart /></li>
                <li className='icons' title='Inicia sesión en tu cuenta'><FaRegCircleUser /></li>
            </ul>

            
        </div>
        
    )
}