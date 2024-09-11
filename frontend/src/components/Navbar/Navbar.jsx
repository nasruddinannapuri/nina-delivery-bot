import React, { useState } from 'react'
import './Navbar.css';


const Navbar = () => {

    const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <h1>Logo</h1>
      </div>
      <div className='navbar-middle'>
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><a href="#">Home</a></li>
            <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}><a href="#">About</a></li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}><a href="#">mobile-app</a></li>
            <li onClick={()=>setMenu("features")} className={menu==="features"?"active":""}><a href="#">Features</a></li>
            <li onClick={()=>setMenu("team")} className={menu==="team"?"active":""}><a href="#">Team</a></li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}><a href="#">Contact-Us</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn">Get Started</button>
      </div>
    </div>
  )
}

export default Navbar
