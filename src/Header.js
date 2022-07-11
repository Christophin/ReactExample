import React from 'react'
import logo from './logo.svg'

function Header() {
    return (
      <div className="Header">
        <img className="header-img" src={logo} alt='logo'/>
        <ul className="header-items">
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
}

export default Header
