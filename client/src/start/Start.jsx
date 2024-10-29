import React from 'react'
import Welcome from '../welcome/Welcome'
import Srecipes from '../srecipes/Srecipes'
import Healthy from '../healthy/Healthy'
import Mealrecipes from '../meal/Mealrecipes'
import Vegetarian from '../vegetarian/Vegetarian'
import Potrecipes from '../potRecipes/Potrecipes'
import Footer from '../footer/Footer'
import PopularVideos from '../popularvideos/PopularVideos'
const Start = () => {
  return (
    <div>
      <Welcome/>
      <Srecipes/>
      <Healthy/>
      <Mealrecipes/>
      <PopularVideos/>
      <Vegetarian/>
      <Potrecipes/>
          <Footer/>
      
    </div>
  )
}

export default Start
