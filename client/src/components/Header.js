import React from "react";
import {Link} from 'react-router-dom';
import "../styles/Header.css";

function Header() {

  return (
    <>
      <div id="header">
        <div id="linkContainer">
        <img className ="logo" src= "logo.png" alt="Logo" />

          <Link to="/" id="homeLink">
            Home
          </Link>
          <Link to="/WalkThrough" id="WalkThroughLink">
            WalkThrough
          </Link>
          <Link to="/Features" id="FeaturesLink">
            Features
          </Link>
          <Link to="/Login" id="LoginLink">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
//DayEntry
//  First i created header in src components folder
//inside header.js i add my route  link
//next i added fotter
