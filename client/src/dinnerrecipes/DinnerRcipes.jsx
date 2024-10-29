import React from 'react';
import './DinnerRecipes.css';

const dinnerItems = [
        { image: 'https://pinchofyum.com/wp-content/uploads/Lettuce-Wraps-4-400x400.jpg', reviews: 44, title: 'Tofu and Brown Rice Lettuce Wraps with Peanut Sauce' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Salmon-Tacos-Square-300x300.png', reviews: 21, title: 'Salmon Tacos with Mango Corn Salsa' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Stephs-Chickpea-Curry-Square-300x300.png', reviews: 73, title: 'Steph’s Chickpea Curry with Spinach and Rice' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-400x400.jpg', reviews: 27, title: 'Cauliflower Black Bean Tostadas with Queso and Pickled Onion' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Gochujang-Noodles-3-400x400.jpg', reviews: 97, title: 'Saucy Gochujang Noodles with Shrimp & Cabbage' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Walnut-Meatballs-1-400x400.jpg', reviews: 97, title: 'Sheet Pan Meatballs with Tomato Salad and Green Sauce' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Roasted-Broccoli-Salad-3-400x400.jpg', reviews: 97, title: 'Liz’s Roasted Broccoli Salad' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Broccoli-Cheese-Soup-2-400x400.jpg', reviews: 97, title: 'Basic + Awesome Broccoli Cheese Soup' },
    ];


const DinnerRecipes = () => {
  return (
    <>
      <div className="dinner-banner">
        <div className="dinner-banner-container">
          <div>
            <img
              src="https://pinchofyum.com/wp-content/uploads/Marry-Me-Chicken-6-400x400.jpg"
              alt="Dinner"
              className="dinner-image"
            />
            <div className="dinner-featured">
              FEATURED RECIPE:
              <a href="#" className="dinner-link"><br/> MARRY ME CHICKEN</a>
            </div>
          </div>
          <div className="dinner-recipe">
            <div className="dinner-tags">
              <span className="dinner-tag">PINCH OF YUM</span>
              <span className="dinner-tag">RECIPES</span>
              <span className="dinner-tag">DINNER</span>
            </div>
            <div className="dinner-tabs">
              <h1 className="dinner-title">Dinner Recipes</h1>
              <p className="dinner-description">
                "What's for dinner?" Gah! That question! Whether it's coming from your own tired brain or a
                family full of hungry askers, let's help you get that question answered!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <section className="easy-section">
        <div className="dinner-slider">
          <h2 className="dinner-slider-title">Top Rated Dinner Recipes</h2>
          <div className="dinner-card-container">
          
            {dinnerItems.map((item, idx) => (
              <div key={idx} className="dinner-card">
                <img src={item.image} alt={item.title} className="dinner-card-image" />
                <div className="dinner-card-info">
                  <p className="dinner-card-reviews">{item.reviews} REVIEWS / 5 AVERAGE</p>
                  <h3 className="dinner-card-title">{item.title}</h3>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DinnerRecipes;
