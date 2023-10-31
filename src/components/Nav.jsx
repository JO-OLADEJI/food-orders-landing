import React from 'react';
import logoIcon from '../assets/Icons/logo-icon.png';


const Nav = (props) => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src={ logoIcon } alt="" />
      </div>
      <div className="nav-links">
        <ul>
          <li>SIGN IN</li>
        </ul>
      </div>
    </div>
  );
}


export default Nav;