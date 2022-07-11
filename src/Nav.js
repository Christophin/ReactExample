import React from 'react'
import logo from './logo.svg'

function Nav() {
    return (
      <div className="Nav">
        <img src={logo} alt='logo' width="100px"/>
        <h1>Chris' Website</h1>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
}

export default Nav;
