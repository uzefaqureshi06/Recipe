import React from 'react';
import './AllRecipes.css';

const AllRecipes = () => {
    const lunchItems = [
        { image: 'https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg', reviews: 21, title: 'Salmon Tacos with Mango Corn Salsa' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Amazing-Alfredo-Sauce-400x400.jpg', reviews: 43, title: 'Crispy Chicken Tikka Bowls with Mint Sauce' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Gochujang-Tofu-Bowl-400x400.jpg', reviews: 27, title: 'Sheet Pan Meatballs with Tomato Salad and Green Salad' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Favorite-Chicken-Tacos-400x400.jpg', reviews: 27, title: 'Simple Mushroom Penne with Walnut Pesto' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Black-Pepper-Beef-400x400.jpg', reviews: 97, title: 'Meditiarianean Quinona Bowls with Roasted Red Pepper Sauce' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Shrimp-Capellini-Pomodoro-2-2-Homepage-1-400x400.jpg', reviews: 97, title: 'Garlic Butter Capellini Pomodora with Shrimp' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2-Featured-400x400.jpg', reviews: 97, title: '15 Minutes Lo Mein' },
        { image: 'https://pinchofyum.com/wp-content/uploads/5-Ingredient-Spicy-Pork-1-2-400x400.jpg', reviews: 97, title: '5 Ingredients Spicy Pork' },
        { image: 'https://pinchofyum.com/wp-content/uploads/5-Ingredient-Spicy-Pork-1-2-400x400.jpg', reviews: 97, title: '15 Minute Cauliflower Fried Rice' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Vegan-Coconut-Curry-Soup-400x400.jpg', reviews: 97, title: 'Anything you have Conconut Curry Soup' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Falafel-3-400x400.jpg', reviews: 97, title: 'Simple 5 Ingredients Baked Falafel' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Roasted-Red-Pepper-Pasta-4-400x400.jpg', reviews: 97, title: 'Creamy Garlic Roasted Red Papper Pasta' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Dynamite-Plant-Power-Sushi-Bowl-2-2-400x400.jpeg', reviews: 97, title: 'Dynamite Ball Power Sushi Balls' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Veg-Meatballs-2-400x400.jpg', reviews: 97, title: '30Minutes Vegetarian MeatBalls' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Chicken-Sweet-Potato-Meal-Prep-Bowls-1-Homepage-400x400.jpg', reviews: 97, title: 'Spicy Chicken and Sweet Potato Meal' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Spring-Roll-Bowls-4-Featured-400x400.jpg', reviews: 97, title: 'Spring Rolls Bowls with Sweet Garlic Sauce' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Homepage-400x400.jpg', reviews: 97, title: 'Summer Bills Bowls with Sweet Potato Fritters' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Creamy-Tomato-Shells-1-3-Homepage-400x400.jpg', reviews: 97, title: '3 Ingredients Creamy Tomato Shells' },
        { image: 'https://pinchofyum.com/wp-content/uploads/greek-pork-pitas-1-4-featured-300x300.jpg', reviews: 97, title: 'Everthing Greek Pork Pitas' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Carrot-Soup-1-Featured-300x300.jpg', reviews: 97, title: 'Spicy Instant Pot Carrot Soup' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Caprese-Grilled-Cheese-5-400x400.jpg', reviews: 97, title: 'Loaded Caprese Grilled Chesse' },
        { image: 'https://pinchofyum.com/wp-content/uploads/Green-Curry-5-400x400.jpg', reviews: 97, title: '5 Ingredients green Curry' },
    ];

    return (
        <div className="lunch-slide">
        <section className="lunch">

            <h2 className="lunch-title">ALL DINNER RECIPES
            <img className='freepik' src="https://res.cloudinary.com/dxqt7tfgl/image/upload/v1730087445/Uzefa/cqilj91an8vexekipmig.png" alt="" /></h2>
            <p className='time'>There's definitely a time and a place for slow, intricate, patient dinners but that time is not now. Let's keep this quick and easy!</p>
            <div className="lunch-card">
                {lunchItems.map((item, idx) => (
                    <div key={idx} className="lunch-card-item">
                        <img src={item.image} alt={item.title} className="lunch-card-image" />
                        <div className="lunch-card-info">
                            <p className="lunch-card-reviews">
                                {item.reviews} REVIEWS / 5 AVERAGE
                            </p>
                            <h3 className="lunch-card-title">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            </section>
        </div>
    );
};

export default AllRecipes;
