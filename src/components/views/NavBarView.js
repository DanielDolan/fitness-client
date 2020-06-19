import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <ul id="mainMenu"> 
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/meals" className="nav-link">
        <li>Meals </li>
      </Link>
      <Link to="/workouts" className="nav-link">
        <li>Workouts</li>
      </Link>
      <Link to="/login" className="nav-link">
        <li> Login</li>
      </Link>
      <Link to="/signup" className="nav-link">
        <li> Sign Up</li>
      </Link>
      <Link to="/profile" className="nav-link">
        <li> Profile</li>
      </Link>
      </ul>
  );
};

export default NavBarView;
