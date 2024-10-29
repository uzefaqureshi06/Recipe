import React from 'react'
import './Potrecipes.css'
const Potrecipes = () => {
    const potRecipes  = [
        {
          id: 1,
          title: "Instant Pot Mac and Cheese",
          description: "Instant Pot Mac and Cheese – made with 5 real food ingredients. This is SO MUCH BETTER than any mac and cheese I’ve ever had!",
          imageUrl: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Mac-and-Cheese-200x300.jpg"
        },
        {
          id: 2,
          title: "Instant Pot Hawaiian Chicken Tacos with Jalapeño Ranch Slaw",
          description: "These Instant Pot Hawaiian Chicken Tacos are out of this WORLD. Juicy pineapple and spiced chicken crisped under the broiler, tucked into tortillas, and rolled up with creamy jalapeño ranch slaw.",
          imageUrl: "https://pinchofyum.com/wp-content/uploads/Hawaiian-Chicken-Tacos-5-200x300.jpg"
        },
        {
          id: 3,
          title: "Instant Pot Red Curry Lentils",
          description: "Guess what’s for dinner? Creamy, spicy, delicious red curry lentils, made in the Instant Pot.",
          imageUrl: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Red-Curry-Lentils-200x300.jpg"
        },
        {
          id: 4,
          title: "Instant Pot Wild Rice Soup",
          description: "The BEST Wild Rice Soup – in the Instant Pot! So creamy and simple and ready in an hour. Perfect for fall/winter nights!",
          imageUrl: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Wild-Rice-Soup-3-200x300.jpg"
        }
    
      ];
  return (
    <div>
     <div>
       <div className='consta'>
      <div className="health-section">
        <div className="health">
        <div className="health-img">
        <img src="https://res.cloudinary.com/dxqt7tfgl/image/upload/v1729871502/Uzefa/gcx11rlobvl9fdaz3ovf.png" alt="" />
        </div>
            <h1 className="healthy">
                ISTANT POT RECIPES                                                                                                                                                                         
            </h1>
        </div>
      </div>
      <div className="health-secti">
      {potRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
          <div className="recipe-info">
            <h1 className="healthy-title">{recipe.title}</h1>
            <p>{recipe.description}</p>
            <button className="recipe-btn">Make This Recipe</button>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Potrecipes
