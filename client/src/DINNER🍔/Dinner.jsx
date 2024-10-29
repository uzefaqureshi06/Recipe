import React from 'react'
import DinnerRecipes from '../dinnerrecipes/DinnerRcipes'
import EasyDinner from '../easydinner/EasyDinner'
import Health from '../health/Health'
import Vegan from '../vegan/Vegan'
import Insta from '../insta/Insta'
import Back from '../Bacup/Back'
import Footer from '../2footer/Footer'
import AllRecipes from '../AllRecipes/AllRecipes'





const Dinner = () => {
  return (
    <div>
      <DinnerRecipes />
      <EasyDinner />
      <Health/>
      <Vegan/>
     <Insta/>
  <AllRecipes/>
     <Back/>
     <Footer/>
   
 
   
      
    </div>
  )
}

export default Dinner
