import React from 'react';
import './Latest.css';

const Latest = () => {
  return (
    <div className="great">
    <div className="latest-container">
      <div className="greatest">
        <h1>THE LATEST & GREATEST</h1>
        <div className="latest-content">
        
          <div className="latest-recipe">
            <img
              src="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Amazing-Alfredo-Sauce.jpg"
              alt="Homemade Alfredo Sauce"
              className="recipe-image"
            />
            <div className="recipe-content">
              <p className="date">October 15, 2024</p>
              <h2 className="recipe-title">Homemade Alfredo Sauce</h2>
              <p className="recipe-description">
                Creamy, silky, homemade Alfredo sauce! Perfectly smooth, <br/>
                wonderfully creamy, and paired with twirly pasta.
              </p>
              <a href="#continue-reading" className="continue-reading">
                CONTINUE READING

              </a>
            </div>
          </div>
       
          <div className="latest-recipe">
            <img
              src="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Gochujang-Tofu-Bowl.jpg"
              alt="Homemade Alfredo Sauce"
              className="recipe-image"
            />
            <div className="recipe-content">
              <p className="date">October 15, 2024</p>
              <h2 className="recipe-title">Homemade Alfredo Sauce</h2>
              <p className="recipe-description">
                Creamy, silky, homemade Alfredo sauce! Perfectly smooth,
                wonderfully creamy, and paired with twirly pasta.
              </p>
              <a href="#continue-reading" className="continue-reading">
                CONTINUE READING
              </a>
            </div>
          </div>
          <div className="latest-recipe">
            <img
              src="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Favorite-Chicken-Tacos.jpg"
              alt="Homemade Alfredo Sauce"
              className="recipe-image"
            />
            <div className="recipe-content">
              <p className="date">October 15, 2024</p>
              <h2 className="recipe-title">Sticky Gochujang Tofu with Herbs and Peanuts</h2>
              <p className="recipe-description">
              Just 20 minutes to get these chicken tacos on the table! Juicy, flavorful, and absolutely mindless in the best way..
              </p>
              <a href="#continue-readi" className="continue-readi">
                CONTINUE READING
              </a>
            </div>
          </div>

          <div className="freezer-meals">
            <img
              src="https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-freezer-meals-350x523.png"  
              alt="20 Healthy Freezer Meals"
              className="freezer-image"
            />
          </div>

          <div class="recipe-collections">
  <h3>Recipe Collections</h3>
  <ul class="recipe-list">
    <li class="recipe-item">
      <span class="recipe-number">1</span> 
      Instant Pot Recipes
      <span class="recipe-count">48</span>
    </li>
    <li class="recipe-item">
      <span class="recipe-number">2</span>
      Vegan Recipes
      <span class="recipe-count">201</span>
    </li>
    <li class="recipe-item">
      <span class="recipe-number">3</span>
      Meal Prep Recipes
      <span class="recipe-count">36</span>
    </li>
    <li class="recipe-item">
      <span class="recipe-number">4</span>
      Quick and Easy Recipes
      <span class="recipe-count">475</span>
    </li>
    <li class="recipe-item">
      <span class="recipe-number">5</span>
      Pasta Recipes
      <span class="recipe-count">175</span>
    </li>
    <li class="recipe-item">
      <span class="recipe-number">6</span>
      Soup Recipes
      <span class="recipe-count">69</span>
    </li>
    <li class="recipe-item">
      <span class="recipe-number">7</span>
      Most Popular Recipes
      <span class="recipe-count">85</span>
    </li>
  </ul>
  <div class="button-container">
  <a href="#" class="recent-posts-button">VIEW MORE RECENT POSTS</a>
</div>
</div>
  
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Latest;
