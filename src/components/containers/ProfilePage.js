import React, { Component } from "react";
import { me } from "../../thunks";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
// import AuthFormContainer from './AuthFormContainer'

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      lastName: "",
      firstName: "",
      rediretLogin: false
    }
  }
  componentDidMount() {
    this.props.me();
    console.log(this.props.firstName);
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.firstName}</h1>
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