import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { fetchAllWorkoutsThunk } from '../../../thunks';
import { connect } from "react-redux";
import { auth } from "../../thunks";
import { AuthFormView } from "../views";

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
    console.log(formName)
    this.props.loginOrSignup(this.state.email, this.state.password, formName);
  }

  render() {
    return (
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

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginOrSignup: (email, password, formName) => dispatch(auth(email, password, formName))
  }
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(AuthFormContainer);