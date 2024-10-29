import React from 'react';
import './Insta.css';

const Insta = () => {
  return (
    <div className="social-footer">
      <section className="social-follow-section">
        <div className="social-links-container">

          <div className="social-icons">
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-pinterest'></i></a>
            <a href="#"><i className='bx bxl-facebook-circle'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
          </div>
        
        </div>
        
        <div className="newsletter-signup">
          <span className="newsletter-text">signup<span>FOR EMAIL  UPDATES</span></span>
          <div className="signup-form">
            <input type="text" placeholder="First Name" className="input-field"/>
            <input type="email" placeholder="Email" className="input-field"/>
            <button className="submit-btn">SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insta;
