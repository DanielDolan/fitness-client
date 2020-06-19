import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";


const NavBarView = (props) => {
  const { 
    firstName, 
    isLoggedIn} = props;

    console.log(isLoggedIn)
    console.log(firstName)
  const displayLogin = (
      <>
      <Link to="/login" className="nav-link">
        Sign in
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
      </>
  );
  
  const displayLogout = (
    <>
      <h3>hello, {firstName}</h3>
      <Link to="/logout" className="nav-link">
         Log out
      </Link>
    </>
  )

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
      <> {isLoggedIn? displayLogout : displayLogin}</>
      <Link to="/profile" className="nav-link">
        <li> Profile</li>
      </Link>
      </ul>
  );
};

export default NavBarView;
