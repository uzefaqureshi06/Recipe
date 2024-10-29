import React from 'react'
import './Vegan.css'
const Vegan = () => {
    const dinnerItems = [
        { image: 'https://pinchofyum.com/wp-content/uploads/Tofu-Burgers-1-2-400x400.jpg', reviews: 44, title: 'Spicy Tofu Burger' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Vegetarian-Chili-400x400.jpg', reviews: 21, title: 'Vegetarian Chilli' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Crockpot-Lentil-Soup-3-Homepage-400x400.jpg', reviews: 73, title: 'The Best Detox Crockpot Lentil Soup' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Vegan-Crunchwraps-with-Cashew-Queso-400x400.jpg', reviews: 27, title: 'Vegan Crunch wrap Suprin' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Creamy-Red-Pepper-Pasta-1-2-400x400.jpg', reviews: 97, title: 'Creamy Red Pepper Pasta with Blistered Tomatoes' },
        { image: 'https://pinchofyum.com/wp-content/uploads/red-curry-1b-400x400.jpg', reviews: 97, title: 'Red Curry Lentils' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Fajitas-Square-300x300.jpg', reviews: 97, title: 'Vegan Sheet Pan Fajitas with Chpotle Queso' },
        { image: 'https://pinchofyum.com/wp-content/uploads/sweet-potato-peanut-stew-400x400.jpg', reviews: 97, title: 'Spicy Peanut Soup with Sweet Potato + Kale' },
    ];

  return (
    <div>
          <div className="easy-slider">
        <section className="easy">

            <h2 className="easy-slider-title">VEGAN DINNER RECIPES
           </h2>
            
            <p className='time'>Looking for some inspiration to keep your dinner spread totally plant-based?</p>
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

export default Vegan
