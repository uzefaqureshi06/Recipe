import React from 'react';
import './Footer.css';
import pinch from '../footer/pinch.png'
const Footer = () => {
  return (
    <footer>

      <div className="footer-container">
      <section className="fotter-section">



        <div className="footer-column">
        
          <h3>Pinch of Yum</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Recipe Index</a></li>
            <li><a href="#">Blogging Resources</a></li>
            <li><a href="#">Income Reports</a></li>
            <li><a href="#">Sponsored Content</a></li>
            <li><a href="#">Media Mentions</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Food & Recipes</h3>
          <ul>
            <li><a href="#">Sugar Free January</a></li>
            <li><a href="#">Freezer Meals 101</a></li>
            <li><a href="#">Quick and Easy Recipes</a></li>
            <li><a href="#">Instant Pot Recipes</a></li>
            <li><a href="#">Pasta Recipes</a></li>
            <li><a href="#">Vegan Recipes</a></li>
            <li><a href="#">Soup Recipes</a></li>
            <li><a href="#">Taco Recipes</a></li>
            <li><a href="#">Meal Prep Recipes</a></li>
          </ul>
        </div>
        </section>
      </div>


      
      <div className="footer-signu">
          <h3><span>Sign Up </span> for Email Updates</h3>
          <p>Get a Free eCookbook with our top 25 recipes</p>
          <div className="signup-form">
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Email" />
            <button type="button">GO</button>
          </div>
        </div>

    
      <div className="brands">
        <h3 className='bran'>Our Other Brands</h3>
        <img className='brand' src="https://pinchofyum.com/wp-content/assets/images/food-blogger-pro-logo.png" alt="Brand 1" />
        <img src="https://pinchofyum.com/wp-content/assets/images/clariti-logo.svg" alt="Brand 2" />
      </div>

      <div className="social-icon">
      <a href="#"><i className='bx bxl-instagram' ></i></a>
      <a href="#"><i className='bx bxl-pinterest-alt' ></i></a>
      <a href="#"><i className='bx bxl-facebook'></i></a>
      <a href="#"><i className='bx bxl-twitter' ></i></a>  
      <a href="#"><i class='bx bxl-tiktok'></i></a>  
     
          </div>
       
      <div className="footer-bottom">
       
        <p className='terms'>Privacy Policy | Terms</p>
        <p  className='sell'>Do not sell or share my personal information</p>
      
      </div>


    </footer>
  );
}

export default Footer;
