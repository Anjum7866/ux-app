import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logoA.png'
import './navbar.css'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] =useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">

         </div>
      </div>
      <div className="gpt3__navbar-sign">
      <p><a href="#home">Home</a></p>
      <p><a href="#about-us">About Us</a></p>
          <p><a href="#services">Training</a></p>
           
          <p><a href="#contact-us">Contact Us</a></p>
      </div>
      <div className='gpt3_navbar-menu'>
      {isMobile && (
        toggleMenu ? (
          <FaTimes color="#fff" size={27} onClick={handleClick} />
        ) : (
          <FaBars color="#fff" size={27} onClick={handleClick} />
        )
      )}
      {toggleMenu && isMobile && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#features">Training</a></p>
            <p><a href="#wgpt3">About Us</a></p>
            <p><a href="#possibility">Contact Us</a></p>
          
          </div>
          {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
      )}
    </div>
    </div>
  )
}

export default Navbar
