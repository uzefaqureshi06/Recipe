import React from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import './Category.css';
import MinorCategory from '../minorCategory/MinorCategory'

const Category = () => {
  const navigate = useNavigate();

  const goToRecipes = () => {
    navigate('/dinner'); 
  };

  return (
    <>
      <div className="header-title">
        <p>SIMPLE RECIPES MADE FOR <span>real actual everyday life</span></p>
      </div>

      <div className="background">
        <div className="card">
          <img 
            src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Baked-Tortellini-1-scaled-e1708701729683.jpg" 
            alt="Delicious Dinner"
          />
          <button className="recipe-button" onClick={goToRecipes}>Dinner</button>
        </div>

        <div className="card">
          <img 
            src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Sausage-White-Bean-2.jpg" 
            alt="Delicious Dinner"
          />
          <button className="recipe-button" onClick={goToRecipes}>SOUPS</button>
        </div>

        
        <div className="card">
  <div className="imag">
          <img
            src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Chicken-with-Coconut-Kale-Sauce.jpg" 
            alt="Delicious Dinner"
          />
          <button className="recipe-butt" onClick={goToRecipes}>SOS</button>
        </div>
        </div>
        <div className="card">
  <div className="image">
          <img
            src="https://images.pexels.com/photos/18912713/pexels-photo-18912713/free-photo-of-pizza-with-mozzarella-shaped-as-ghosts-for-halloween.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Delicious Dinner"
          />
          <button className="recipe-butt" onClick={goToRecipes}>FALL</button>
        </div>
        </div>
      </div>

      <MinorCategory/>
      
    </>
  );
};

export default Category;
