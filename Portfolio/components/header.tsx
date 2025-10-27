import React from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css';

const Header = () => {
  return (
    <header>
      <div className="overlay">
        <div className="div-logo">
          <Link className="logo" to="/">
            <img src="images/white icon.png" alt="logo" />
          </Link>
        </div>
        <ul className="main-nav">
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">My Projects</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
        </ul>
        <h1>Welcome to my portfolio</h1>
        <div className="mainphoto">       
          <img src="images/Shams.face.jpg" alt="girlphoto" /> 
        </div>
        <br />
      </div>
    </header>
  );
};

export default Header;