import React from 'react'
import logo from '../images/logo.svg';

function MainContent() {
  return (
    <div className="MainContent App-default" >
      <img src={logo} alt="logos" width="80px" />
      <h1 float="right">Fun facts about react</h1>
      <ul>
        <li>Was first realeased in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

export default MainContent
