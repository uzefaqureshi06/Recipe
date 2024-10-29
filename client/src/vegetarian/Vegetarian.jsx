import React from 'react'
import './Vege.css'
const Vegetarian = () => {

    const vegeRecipes  = [
        {
          id: 1,
          title: "Vegetarian Shepherd’s Pie",
          description: "Vegetarian Sepherd’s Pie ♡ saucy mushrooms, carrots, and peas topped with creamy mashed potatoes. Real food meets comfort food!",
          imageUrl: "https://pinchofyum.com/wp-content/uploads/vegetarian-shepherds-pie-200x300.jpg"
        },
        {
          id: 2,
          title: "15 Minute Lo Mein",
          description: "15 Minute Lo Mein! Made with just soy sauce, sesame oil, a pinch of sugar, ramen noodles or spaghetti noodles, and any veggies or protein you like. SO YUMMY!",
          imageUrl: "https://pinchofyum.com/wp-content/uploads/Meal-Prep-Breakfast-Sandwich-Ingredients-1-1-200x300.jpg"
        },
        {
          id: 3,
          title: "Date Night Mushroom Fettuccine",
          description: "Date Night Mushroom Fettuccine – elegant and luscious and FIVE INGREDIENT EASY.",
          imageUrl: "https://pinchofyum.com/wp-content/uploads/Cauliflower-Fried-Rice-3-1-200x300.jpg"
        },
        {
          id: 4,
          title: "5-Ingredient Green Curry",
          description: "Packed with tons of veggies, an easy green curry sauce, and finished with golden raisins and cilantro.",
          imageUrl: "https://pinchofyum.com/wp-content/uploads/Cilantro-Lime-Chicken-with-Rice-in-Meal-Prep-Containers-200x300.jpg"
        }
    
      ];
  return (
    <div>
        <div>
       <div className='const'>
      <div className="health-section">
        <div className="health">
        <div className="health-img">
        <img src="https://cdn-icons-png.freepik.com/256/2619/2619481.png" alt="" />
        </div>
            <h1 className="healthy">
                VEGETARIAN RECIPES                                                                                                                                                                         
            </h1>
        </div>
      </div>
      <div className="health-secti">
      {vegeRecipes.map(recipe => (
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

export default Vegetarian
