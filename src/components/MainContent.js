import React from 'react'
import logo from '../images/logo.svg';

function MainContent() {
  return (
    <div className="MainContent App-default" >
      <img src={logo} alt="logos" width="80px" />
      <h1 float="right">Fun facts about react</h1>
      <ul className="main-list">
        <li><span>Was first realeased in 2013</span></li>
        <li><span>Was originally created by Jordan Walke</span></li>
        <li><span>Has well over 100k stars on Github</span></li>
        <li><span>Is maintained by Facebook</span></li>
        <li><span>Powers thousands of enterprise apps, including mobile apps</span></li>
      </ul>
    </div>
  );
}

export default MainContent
