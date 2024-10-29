import React from 'react'
import './Myself.css'
const Myself = () => {
  return (
    <div>
      <div className="container">
      
    <div className="car">
      <h1>HI! I'M LINDSAY</h1>
      <h2>Nice to meet you!</h2>
      <p>I’m a former 4th grade teacher, now full time blogger. My husband Bjork and I live in Minnesota. Favorite things include my camera, lake days, and dark chocolate.</p>
      <button>Learn More</button> 
    </div>

    <div className="card imag-card">
      <img src="https://pinchofyum.com/wp-content/assets/images/home-lindsay-kitchen-380x480.jpg" alt="Cooking image"/>
    </div>

    <div className="card imag-card">
      <img src="https://pinchofyum.com/wp-content/assets/images/home-lindsay-pour-380x480.jpg" alt="Preparing ingredients"/>
    </div>
  </div>

  <div className="footer-section">
  <div className="social-media">
    <span className="follow-text">FOLLOW US</span>
    <div className="icons">
      <a href="#"><i className='bx bxl-instagram' ></i></a>
      <a href="#"><i className='bx bxl-pinterest' ></i></a>
      <a href="#"><i className='bx bxl-facebook-circle'></i></a>
      <a href="#"><i className='bx bxl-twitter' ></i></a>
      </div>
  </div>
  <div className="email-signup">
    <span className="signup-text">signup <span>FOR EMAIL UPDATES</span></span>
    <div className="signup-form">
      <input type="text" placeholder="First Name" className="input-box"/>
      <input type="email" placeholder="Email" className="input-box"/>
      <button className="go-btn">GO</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Myself
