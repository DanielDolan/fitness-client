import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { fetchAllWorkoutsThunk } from '../../../thunks';
import { connect } from "react-redux";
import { signup,login } from "../../thunks";
import { AuthFormView } from "../views";
import  ProfilePage  from './ProfilePage'

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      lastName: "",
      firstName: ""
    }
  }

  // handle the input text change
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handle the submit bottom
  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    console.log("form name: ", formName)
    if (formName === "login"){
      this.props.login(this.state.email, this.state.password, formName);
  } else
      this.props.signup(this.state.firstName, this.state.lastName, this.state.email, this.state.password, formName);
  }

  render() {
    return (
      <>
      <AuthFormView
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoggedIn={this.props.isLoggedIn}
        isSigned={this.props.isSigned}
        userEmail={this.props.userEmail}
      />
      <ProfilePage
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoggedIn={this.props.isLoggedIn}
        isSigned={this.props.isSigned}
        userEmail={this.props.userEmail}
      />
      </>
    );
  }
};

// Map state to props;
const mapLogin = state => {
  // console.log(state.user)
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email
  };
};

// Map state to props;
const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    firstName: state.user.firstName,
    lastsName: state.user.lastName,
    isSigned: !!state.user.id,
    userEmail: state.user.email
  };
};

// Map login dispatch to props;
const mapDispatchLogin = dispatch => {
  return { 
    login: (email, password, formName) => dispatch(login(email, password))
  }
};

// Map sign up dispatch
const mapDispatchSignUp = dispatch =>{
  return { 
    signup: (firstName, lastName, email, password, formName) => dispatch(signup(firstName, lastName, email, password))
  }
};


export const Login = connect(mapLogin, mapDispatchLogin)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatchSignUp)(AuthFormContainer);
