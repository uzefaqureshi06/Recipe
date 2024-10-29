import React from 'react'
import './AllDinner.css'
const AllDinner = () => {
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
  return (
    <div>
       <div className="easy-slider">
        <section className="easy">

            <h2 className="easy-slider-title">Top Rated Dinner Recipes</h2>
            <p className='time'>There's definitely a time and a place for slow, intricate, patient dinners but that time is not now. Let's keep this quick and easy!</p>
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

export default AllDinner
