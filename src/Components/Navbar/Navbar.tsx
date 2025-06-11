import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <i className="fa-solid fa-bars"></i>
          <img src="./images/logo.svg" alt="company logo" />
        </div>

        <div>
          <ul className="navbar-links">
            <li>About</li>
            <li>Contact Me</li>
            <li><i className="fa-solid fa-user"></i>Client Login</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar