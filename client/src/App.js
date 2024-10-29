import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Category from './category/Category';

import About from './About/About';
import Recipe from './recipe/Recipe';
import Home from './home/Home';

import './App.css'
import Start from './start/Start';
import DinnerRcipes from './dinnerrecipes/DinnerRcipes';
import Pancake from './pancake/Pancake';
import Dinner from './DINNER🍔/Dinner';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/pancake" element={<Pancake />} />

      </Routes>

    </Router>
  );
};

export default App;
