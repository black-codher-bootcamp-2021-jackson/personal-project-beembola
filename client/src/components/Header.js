import React from "react";
import {Link} from 'react-router-dom';
function Header() {

  return (
    <>
      <div id="header">
        hhhhhhhhhhhhh
        <h1>header</h1>
        <div id="linkContainer">
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
