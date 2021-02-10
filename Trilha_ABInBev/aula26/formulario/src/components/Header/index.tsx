import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/text" exact>Text</NavLink></li>
   
      </ul>
    </div>
  );
}

export default Header;