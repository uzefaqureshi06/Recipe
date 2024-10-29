import React from 'react'
import './Follow.css'
const Follow = () => {
  return (
    <div>
   <div className="footer-sec">
  <div className="social">
    <span className="follow">FOLLOW US</span>
    <div className="icon">
      <a href="#"><i className='bx bxl-instagram' ></i></a>
      <a href="#"><i className='bx bxl-pinterest' ></i></a>
      <a href="#"><i className='bx bxl-facebook-circle'></i></a>
      <a href="#"><i className='bx bxl-twitter' ></i></a>
      </div>
  </div>
  <div className="email">
    <span className="updates">signup<span>FOR EMAIL UPDATES</span></span>
    <div className="sign">
      <input type="text" placeholder="First Name" className="input-bo"/>
      <input type="email" placeholder="Email" className="input-bo"/>
      <button className="go-bt">GO</button>
    </div>
  </div>
</div>   
    </div>
  )
}

export default Follow
