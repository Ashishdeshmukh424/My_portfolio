import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Ashish</div>
        {/* <span>toggle</span> */}
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>

          </ul>
        </div>
        <button className="button n-button">
          Contact
        </button>
      </div>
    </div>
  )
}

export default NavBar