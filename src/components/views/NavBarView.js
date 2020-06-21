import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  const {
    firstName,
    isLoggedIn } = props;

  console.log(isLoggedIn)
  console.log(firstName)
  const displayLogin = (
    <>
      <Link to="/login" className="nav-link-user">Sign in</Link>
      <Link to="/signup" className="nav-link-user">Sign Up</Link>
    </>
  );

  const displayLogout = (
    <>
      <div className="name">hello, {firstName}</div>
      <Link to="/logout" className="nav-link-user">Log out</Link>
    </>
  )

  return (
    <nav className="navbar  mb-3">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/meals" className="nav-link">Meals</Link>
      <Link to="/workouts" className="nav-link">Workouts</Link>
      <>{isLoggedIn ? displayLogout : displayLogin}</>
      <Link to="/profile" className="nav-link-user">Profile</Link>
    </nav>
  );
};

export default NavBarView;
