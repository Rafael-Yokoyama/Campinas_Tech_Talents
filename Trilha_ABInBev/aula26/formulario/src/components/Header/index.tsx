import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/Home" exact>Home</NavLink></li>
        <li><NavLink to="/" exact>Login</NavLink></li>
   
      </ul>
    </div>
  );
}

export default Header;