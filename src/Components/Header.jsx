import React from 'react';
import './Header.css';
import logo from '../image/logo.jpg';
import 'bootstrap/dist/css/bootstrap.css';

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <div className='headerone'>

        <h1 className="logo">
         <img src={logo} alt="" />
        </h1>
        <ul className="main-nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Our Offerings</a>
          </li>
          <li>
            <a href="/">Our Team</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
        </ul> 
        <button type="button" class="btn btn-primary w-22 h-25 mt-5 ">Register Now</button>
        {/* <button className='btu'>Register now</button> */}
        </div>

      </header>
    </div>
  );
};

export default Header;
