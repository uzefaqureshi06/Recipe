import React from 'react'
import './Health.css'
const Health = () => {
    const dinnerItems = [
        { image: 'https://pinchofyum.com/wp-content/uploads/Salmon-with-Basil-Sauce-Square-1-300x300.png', reviews: 44, title: 'Salmon with Basil Sauce and Tamoto Salad' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Mushroom-Bowls-1-400x400.jpg', reviews: 21, title: 'Amazing Mushroom Bowl With Kale' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Baked-Salmon-2-400x400.jpg', reviews: 73, title: 'Perfect Baked Salmon and Lentis and Lemon Herb Sauce' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Detox-Chopped-Salad-1-2-Homepage-400x400.jpg', reviews: 27, title: 'Glowing Grilled Summer Dextos Salad' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Healing-Bowl-1-2-Homepage-400x400.jpg', reviews: 97, title: 'Healing Bowls with Turmeric Sweet Potatoes, Poached Eggs, and Lemon Dressing' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Dynamite-Plant-Power-Sushi-Bowl-2-2-400x400.jpeg', reviews: 97, title: 'Dynamic Plant Power Sushi Bowls' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Broccoli-Salad-3-400x400.jpg', reviews: 97, title: 'Broccli Salad with Creamy Almon Dressing' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Homepage-400x400.jpg', reviews: 97, title: 'Summmer Bliss Bowls with Sweet Potato' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-2-Homepage-400x400.jpg', reviews: 97, title: 'Quick and Easy Spiced Chickpea Bowls' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Salmon-with-Lemon-Sauce-1-2-400x400.jpg', reviews: 97, title: 'Baked Salmon With Amazing Lemon with Sauce' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Garlic-Basil-White-Fish-Skillet-with-Tomato-Butter-Sauce-5-400x400.jpg', reviews: 97, title: 'Garrlic Basil Baramundi Skillet With Tomato butter Sauce' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Instant-Pot-Minestrone-4-400x400.jpg', reviews: 97, title: 'Instant Pot Minestrone Soup ' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Sunshine-Lentil-Bowls-Thumbnail-400x400.jpeg', reviews: 97, title: 'sunshine Lentils Bowl With garlic Olive Oil Dressing' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Summer-Soup-Feature-1-300x300.jpg', reviews: 97, title: 'Clean Eating Instant Pot Summer Soup ' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Back-Pocket-Stir-Fry-3-400x400.jpg', reviews: 97, title: 'Basic + Awesome Broccoli Cheese Soup' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Roasted-Cauliflower-Burrito-Bowls-1-400x400.jpg', reviews: 97, title: 'Basic + Awesome Broccoli Cheese Soup' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Summer-Cobb-Salad-in-Bowl-400x400.jpg', reviews: 97, title: 'Basic + Awesome Broccoli Cheese Soup' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Chipotle-Tahini-Bowls-with-Egg-400x400.jpg', reviews: 97, title: 'Basic + Awesome Broccoli Cheese Soup' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Roasted-Veggie-Bowl-with-Egg-1-400x400.jpg', reviews: 97, title: 'Basic + Awesome Broccoli Cheese Soup' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Tortilla-Soup-400x400.jpg', reviews: 97, title: 'Basic + Awesome Broccoli Cheese Soup' },
    ];

  return (
    <div>
          <div className="easy-slider">
        <section className="easy">

            <h2 className="easy-slider-title">Healthy Dinner Recipes</h2>
            <p className='time'>Real food, fresh ingredients, nutrition-packed. Let's get some good-for-you food on the table</p>
            <div className="easy-card-container">
                {dinnerItems.map((item, idx) => (
                    <div key={idx} className="easy-card">
                        <img src={item.image} alt={item.title} className="easy-card-image" />
                        <div className="easy-card-info">
                            <p className="easy-card-reviews">
                                {item.reviews} REVIEWS / 5 AVERAGE
                            </p>
                            <h3 className="easy-card-title">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            </section>
        </div>
    </div>
  )
}

export default Health
