import React, { Component } from "react";
import { me } from "../../thunks";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import "../views/styles/ProfilePageView.css"
// import AuthFormContainer from './AuthFormContainer'

class ProfilePage extends Component {
  constructor(props) {
    super(props);
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
      rediretLogin: false
    }
  }
  componentDidMount() {
    this.props.me();
    console.log(this.props.firstName);
  }

  render() {
    return (
      <div className="profile-page-view">
        <h2>Name: {this.props.firstName} {this.props.lastName}</h2>
        {/* <h1>first name {this.props.firstName}</h1>
        <h1>last name {this.props.lastName}</h1> */}
        <p>Weight: {this.props.weight}</p>
        <p>Weight Goal: {this.props.weightGoal}</p>
        <p>Age: {this.props.age}</p>
        <p>Birthday: {this.props.birthday}</p>
      </div>
    );
  }

}

ProfilePage.propTypes = {
};

const mapUser = state => {
  return {
    name: "user",
    displayName: "User",
    error: state.user.error,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    weight: state.user.weight,
    weightGoal: state.user.weightGoal,
    height: state.user.height,
    age: state.user.age,
    birthday: state.user.birthday,
    isLoggedIn: !!state.user.id
  };
};

// Map login dispatch to props;
const mapDispatchUser = dispatch => {
  return { 
    me: () => dispatch(me())
  }
};

export default connect(mapUser, mapDispatchUser)(ProfilePage);