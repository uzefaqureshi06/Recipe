import React from 'react'


import Category from '../category/Category'
import Company from '../companies/Company'
import Latest from '../latest/Latest'
import Myself from '../myself/Myself'
import Tabs from '../Tabs/Tabs'
import Back from '../Bacup/Back'
import Footer from '../footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
  return (
    <div>
    
 <Category/>
 <Company/>
 <Latest/>
  <Myself/>
  <Tabs/>
  <Back/>
  <Footer/>
    </div>
  )
}

export default Home
