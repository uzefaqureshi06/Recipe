import React, { useState } from 'react';
import './Tabs.css'; 


const RecipeTabs = () => {
  const [activeTab, setActiveTab] = useState('Vegetarian');

  const tabs = ['Vegetarian', 'Quick + Easy', 'Popular on Pinterest'];

  const allRecipes = {
    Vegetarian: [
      {
        category: 'Vegetarian',
        title: 'Gorgeous Peach Salad',
        image: 'https://pinchofyum.com/wp-content/uploads/Peach-Salad-in-Bowl-400x400.jpg',
        button: 'Recipes',
      },
      {
        category: 'Vegetarian',
        title: 'Amazing Green Rice',
        image: 'https://i0.wp.com/fountainavenuekitchen.com/wp-content/uploads/2012/05/fullsizeoutput_a909.jpeg?resize=2048%2C1536&ssl=1',
        button: 'Rice',
      },
      {
        category: 'Vegetarian',
        title: 'Avocado Caesar Green Beans',
        image: 'https://www.sidechef.com/recipe/3e22d489-1b78-4756-8284-ca525a043fbc.jpg?d=704x560',
        button: 'Recipes',
      },
      {
        category: 'Vegetarian',
        title: 'Ridiculously Good Air Fryer Tofu',
        image: 'https://d1yfn1dfres2va.cloudfront.net/010/40/6b/406b2d132859e0b24d5caaed08d30ff6_250x250.jpg',
        button: 'Recipes',
      },
    ],
    'Quick + Easy': [
      {
        category: 'Quick + Easy',
        title: 'Spicy Shrimp with Peach Salad',
        image: 'https://pinchofyum.com/wp-content/uploads/Black-Pepper-Beef-400x400.jpg',
        button: 'Pasta',
      },
      {
        category: 'Quick + Easy',
        title: 'Garlic and Black Pepper Beef Skewers',
        image: 'https://therecipecritic.com/wp-content/uploads/2022/06/asiangarlicskewers-500x375.jpg',
        button: 'MEAT AND CHICKEN',
      },
      {
        category: 'Quick + Easy',
        title: 'Chicken with Coconut Kale',
        image: 'https://kalejunkie.com/wp-content/uploads/2024/03/KJ_One-Pan-Saucy-Coconut-Chicken-6.jpg',
        button: 'RECIPES',
      },
      {
        category: 'Quick + Easy',
        title: 'Ricotta Meatballs with the Crispy Topping',
        image: 'https://pinchofyum.com/wp-content/uploads/Spicy-Shrimp-w-Peach-Salad-400x400.jpg',
        button: 'SOS RECIPES',
      },
    ],
    'Popular on Pinterest': [
      {
        category: 'Popular on Pinterest',
        title: 'Gorgeous Peach Salad',
        image: 'https://betterfoodguru.com/wp-content/uploads/2024/07/IMG_0727-819x1024.jpg',
        button: 'RECIPES',
      },
      {
        category: 'Popular on Pinterest',
        title: 'The Best Avocado Egg Salad',
        image: 'https://louisianacookin.com/wp-content/uploads/2018/09/Dudes-Baked-Avocado-Eggs.jpg',
        button: 'RICE',
      },
      {
        category: 'Popular on Pinterest',
        title: 'Vegan Crunchwrap Supreme',
        image: 'https://www.wearesovegan.com/wp-content/uploads/2020/07/XSV_CruchWrap_Social1.jpg',
        button: 'DINNER',
      },
      {
        category: 'Popular on Pinterest',
        title: 'Slow Cooker Pasta Pot ',
        image: 'https://st2.depositphotos.com/1326558/7226/i/450/depositphotos_72263189-stock-photo-penne-pasta-in-tomato-sauce.jpg',
        button: 'ALL RECIPES',
      },
    ],
  };

  const activeRecipes = allRecipes[activeTab];

  return (
    <div className="recipe-tabs-container">
      <div className="tabs-navigation">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`} >
            {tab}
          </button>
        ))}
      </div>

      <div className="tabs-cards">
        {activeRecipes.map((recipe, index) => (
          <div key={index} className="tabs-card">
            <div className="tabs-card-img">
              <img src={recipe.image} alt={recipe.title} className="tabs-image" />
              <div className="tabs-container">
                <button className='btn'>{recipe.button}</button> 
                <h4 className="tabs-title">{recipe.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeTabs;
