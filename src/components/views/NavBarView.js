import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/meals" className="nav-link">
        Meals
      </Link>
      <Link to="/workouts" className="nav-link">
        Workouts
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
      <Link to="/profile" className="nav-link">
        Profile
      </Link>
    </nav>
  );
};

export default NavBarView;
