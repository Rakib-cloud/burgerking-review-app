import React from "react";
import { NavLink } from "react-router-dom";

import './Navbar.css';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
     
      <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/reviews'
        >
          Reviews
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/Dashboard'
        >
         Dashboard
        </NavLink>

       

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/about'
        >
        About
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/b'
        >
        Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
