import React from 'react'
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <h1>Logo</h1>
      </div>
      <div className='navbar-middle'>
        <ul className="navbar-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">mobile-app</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn">Get Started</button>
      </div>
    </div>
  )
}

export default Navbar
