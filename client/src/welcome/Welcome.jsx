import React from 'react'
import './Welcome.css'
const Welcome = () => {
  return (
    <div>
      <div className="welcome-section">
        <div className="welcome">
            <img src="https://pinchofyum.com/wp-content/assets/images/start-here-rigatoni@2x.jpg" alt="" />
        </div>
        <div className="tal">
            <h1 className="talk">
                Welcome to Pinch of Yum
            </h1>
            <h2 className="shall">
                Lets Talk Food <span>shall we</span>
            </h2>

            <p className="day">
            Well, we hope that’s why you’re here. Our recipes are designed for real, actual, every day life, and we try to focus on real foods and healthy recipes (which honestly means a lot of different things to us, including the perfect chocolate chip cookie and cheese on cheese on cheese, because health is all about balance, right?).
            </p>
            <p className="real">
            This is the place to find those recipes — everything from our most popular, to meal prep, to Instant Pot recipes, or if you just, like, have some sad greens in your fridge to use up and you need some inspiration.
            </p>
            <p className="real">
            You’re here! Have fun. We hope you find something (many things) you love.
            </p>
        </div>
      </div>
      <div className="footer">
  <div className="social-media">
    <span className="follow-text">FOLLOW US</span>
    <div className="icons">
      <a href="#"><i className='bx bxl-instagram' ></i></a>
      <a href="#"><i className='bx bxl-pinterest' ></i></a>
      <a href="#"><i className='bx bxl-facebook-circle'></i></a>
      <a href="#"><i className='bx bxl-twitter' ></i></a>
      </div>
  </div>
  <div className="email">
    <span className="sig">signup <span>FOR EMAIL UPDATES</span></span>
    <div className="signup-form">
      <input type="text" placeholder="First Name" className="input"/>
      <input type="email" placeholder="Email" className="input"/>
      <button className="go-btn">GO</button>
    </div>
  </div>
</div>
   
    </div>
  )
}

export default Welcome
