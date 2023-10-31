import React from 'react';
import headerIllustration from '../assets/Illustrations/header-illustration.png';


const Header = (props) => {
  return (
    <div className="Header">
      <div className="header-text">
        <h3>At Shootfish, we</h3>
        <h1>
          Track your orders. 
          <br />
          Know the state of your order at all times.
        </h1>
        <p>
          We created a food order and temperature tracking platform just for you, with the intention of tracking key metrics like order placement and temperature, and computing periodic records of your orders.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div className="header-illustration">
        <img src={ headerIllustration } alt="" />
      </div>
    </div>
  );
}


export default Header;