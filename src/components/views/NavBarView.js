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
    </nav>
  );
};

export default NavBarView;
