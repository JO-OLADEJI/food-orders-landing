import React from 'react';
import logoIcon from '../assets/Icons/logo-icon.png';


const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="logo">
        <img src={ logoIcon } alt="" />
      </div>
      <div className="social-links">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-telegram-plane"></i>
      </div>
      <div className="copyright">
        <p>&copy; {year} Shootfish. All rights reserved.</p>
      </div>
    </div>
  );
}


export default Footer;