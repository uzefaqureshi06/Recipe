import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import pinch from '../navbar/pinch.png';

const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleBottomSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={pinch} alt="Logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipe">
            RECIPES
          </NavLink>
        </li>
      
        <li>
          <NavLink to="/start">
            START HERE
          </NavLink>
        </li>
      
      </ul>
      <div className="search-icon" >
        <i className='bx bx-search-alt search ' onClick={toggleBottomSheet}></i>
      </div>

      {isSheetOpen && (
        <div className="bottom-sheet">
          <div className="sheet-overlay"></div>
          <div className="content">
            <div className="arrow">
              <i className='bx bxs-chevron-down' onClick={toggleBottomSheet}></i>
            </div>
            <div className="header">
         
            </div>
            <div className="body">
              <input type="text" placeholder="Search for a recipe..." />
              <i className='bx bx-search-alt search searc'></i>
            
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
