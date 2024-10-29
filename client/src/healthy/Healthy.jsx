import React from 'react'
import './Healthy.css'
const Healthy = () => {

  const healthyRecipes  = [
    {
      id: 1,
      title: "The Best Detox Crockpot Lentil Soup",
      description: "Detox Crockpot Lentil Soup – a clean and simple soup made with onions, garlic, carrots, olive oil, squash, and LENTILS! Super healthy and easy to make.",
      imageUrl: "https://pinchofyum.com/wp-content/uploads/Crockpot-Lentil-Soup-3-Homepage-200x300.jpg"
    },
    {
      id: 2,
      title: "5 Minute Magic Green Sauce",
      description: "5 Minute Magic Green Sauce – SO AWESOME. Made with easy ingredients like avocado, olive oil, cilantro, lime, garlic, and parsley! Vegan.",
      imageUrl: "https://pinchofyum.com/wp-content/uploads/green-sauce-6-185x300.jpg"
    },
    {
      id: 3,
      title: "Chopped Thai-Inspired Chicken Salad",
      description: "Creamy Thai Sweet Potato Curry – packed with nutrition! Our favorite easy, healthy, winter comfort food recipe.",
      imageUrl: "https://pinchofyum.com/wp-content/uploads/feature-curry-1-200x300.jpg"
    },
    {
      id: 4,
      title: "Creamy Thai Sweet Potato Curry",
      description: "This simple chopped Thai chicken salad has BIG flavors – peanut, lime, soy, chili, cilantro. Topped with a homemade peanut dressing! Healthy and fresh.",
      imageUrl: "https://pinchofyum.com/wp-content/uploads/Thai-Chicken-Salad-in-a-Bowl-200x300.jpg"
    }

  ];

  return (
    <div>
      <div className="health-section">
        <div className="health">
        <div className="health-img">
        <img src="https://res.cloudinary.com/dxqt7tfgl/image/upload/v1729853712/Uzefa/xeohom1hvpf9pifzkgbb.png" alt="" />
        </div>
            <h1 className="healthy">
                HEALTHY RECIPES                                                                                                                                                                           
            </h1>
        </div>
      </div>
      <div className="health-secti">
      {healthyRecipes.map(recipe => (
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
  )
}

export default Healthy
