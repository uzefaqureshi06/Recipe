import React from 'react';
import './MinorCategory.css';

const MinorCategory = () => {
  const categories = [
    { title: "Quick and Easy", img: "https://pinchofyum.com/wp-content/uploads/Chicken-Wontons-1-96x96.jpg" },
    { title: "Dinner", img: "https://pinchofyum.com/wp-content/uploads/Baked-Tortellini-1-scaled-e1708701729683-840x1200.jpg" },
    { title: "Vegetarian", img: "https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-96x96.jpg" },
    { title: "Healthy", img: "https://pinchofyum.com/wp-content/uploads/Spicy-Peanut-Chicken-Salad-Soba-1-2-96x96.jpg" },
    { title: "Instant Pot", img: "https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-96x96.jpg" },
    { title: "Vegan", img: "https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-96x96.jpg" },
    { title: "Gluten Free", img: "https://pinchofyum.com/wp-content/uploads/Family-Style-Pitas-2-96x96.jpg" },
    { title: "SOUPS", img: "https://pinchofyum.com/wp-content/uploads/Sausage-White-Bean-2-96x96.jpg" },
    { title: "SALAD", img: "https://pinchofyum.com/wp-content/uploads/Couscous-Summer-Salad-96x96.jpg" },
  ];

  return (
    <div className='contain'>
    <div className="categories-container">
      {categories.map((category, index) => (
        <div className="category-card" key={index}>
          <img src={category.img} alt={category.title} />
          <div className="category-title">{category.title}</div>
        </div>
      ))}
    </div>

    <div className="search-recipes-container">
      {/* Search Input */}
      <div className="search-input">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search our recipes"
          className="search-textbox"
        />
      </div>
      
    
      <span className="separator">or</span>

      <button className="view-all-recipes-btn">
        + VIEW ALL RECIPES
      </button>
    </div>
    </div>
  );
};

export default MinorCategory;
