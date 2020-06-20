import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import { fetchAllWorkoutsThunk } from '../../../thunks';
import { connect } from "react-redux";
import { signup, login, logout } from "../../thunks";
import { AuthFormView } from "../views";
import { Redirect } from 'react-router-dom'
// import  ProfilePage  from './ProfilePage'

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      lastName: "",
      firstName: "",
      weight: 0,
      weightGoal: 0,
      height: "",
      age: 0,
      birthday: "",
      // userImage: Image,
      redirectToHome: false,
      redirectToProfile: false,
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
    if (formName === "login"){
      this.props.login(this.state.email, this.state.password, formName);
      this.setState({redirectToProfile: true});
    } else if (formName === "signup"){
      this.props.signup(this.state.firstName, this.state.lastName, this.state.email, this.state.password, this.state.weight, 
        this.state.weightGoal, this.state.height, this.state.age, this.state.birthday, formName);
      this.setState({redirectToProfile: true})
    }else{
      this.props.logout();
      this.setState({redirectToHome: true})
    }

  }

  render() {
    console.log("is logged In", this.props.isLoggedIn)
    if (this.state.redirectToHome) {
      return (<Redirect to="/"/>)
    }
    if (this.state.redirectToProfile && this.props.isLoggedIn) {
      return (<Redirect to="/profile"/>)
    }
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
        weight={this.props.weight}
        weightGoal={this.props.weightGoal}
        height={this.props.height}
        age={this.props.age}
        birthday={this.props.birthday}
        // userImage={this.props.userImage}
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
    userEmail: state.user.email,
    isLoggedIn: !!state.user.id,
    weight: state.user.weight,
    weightGoal: state.user.weightGoal,
    height: state.user.height,
    age: state.user.age,
    birthday: state.user.birthday,
    // userImage: state.user.userImage
  };
};

const mapLogout = state => {
  return {
    name: "logout",
    displayName: "Sign out",
    error: state.user.error,
    userEmail: state.user.email,
    isLoggedIn: !!state.user.id
  };
};

// Map login dispatch to props;
const mapDispatchLogin = dispatch => {
  return { 
    login: (email, password) => dispatch(login(email, password))
  }
};

// Map sign up dispatch
const mapDispatchSignUp = dispatch =>{
  return { 
    signup: (firstName, lastName, email, password, weight, weightGoal,height,age,birthday) => dispatch(signup(
      firstName, lastName, email, password, weight, weightGoal,height,age,birthday))
  }
};

const mapDispatchLogout = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}


export const Login = connect(mapLogin, mapDispatchLogin)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatchSignUp)(AuthFormContainer);
export const Logout = connect(mapLogout, mapDispatchLogout)(AuthFormContainer);
