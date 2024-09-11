import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>
            Revolutionizing Last-Mile Delivery with Automation
        </h2>
        <h4>
            Experience seamless, reliable, and eco-friendly deliveries with our state-of-the-art autonomous vehicle technology.
        </h4>
      </div>
      <div className="hero">
        <div>
            <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/20_robot-delivery-2021-olg-1729.jpg?itok=XHzNXW1J" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
