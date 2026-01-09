import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

const Nabar = () => {
  return (
    <nav>
      <div className="navBarMaxWidth">
        <div className="logoContainer">
          <img src={logo} alt="Logo" />
          <h1>SKOL</h1>
        </div>
        
        <ul>
            <li>Home</li>
            <li>Programs</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li ><button className='btn'>Contact US</button></li>
        </ul>
        </div>
    </nav>
  )
}

export default Nabar
