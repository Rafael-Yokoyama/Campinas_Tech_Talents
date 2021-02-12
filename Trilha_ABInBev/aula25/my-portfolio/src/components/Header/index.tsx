import React from 'react';
import { Link } from 'react-router-dom'
import Logo_1 from '../../img/logo_1.svg';
const Header = ()=>{
    return (
      <header>
        <nav  className="navbar">
        <div className="nav-menu" >
       
          <ul className='nav-list'>
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="logo">
        <img src={Logo_1}  width="50px"/>
         </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-link " >
        <Link to="/portfolio" className="li_portfolio"  >Portfólio</Link>
        </li>

      </ul>
          </div>
        </nav>
      </header>
    )
}
export default Header;