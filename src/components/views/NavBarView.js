import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  const displayLogin = (
      <>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
      </>
  );
  
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
      <>{ displayLogin }</>
    </nav>
  );
};

export default NavBarView;
