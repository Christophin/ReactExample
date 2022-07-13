import React from 'react'
import logo from '../images/logo.svg'

function Header() {
    return (
      <div className="Header">
        <img className="header-img" src={logo} alt='logo'/>
        <h1 className="header-title">React Facts</h1>
        <h2 className="header-course">React Course - Project 1</h2>
      </div>
    );
}

export default Header
