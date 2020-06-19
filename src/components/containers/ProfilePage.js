import React, { Component } from "react";
// import AuthFormContainer from './AuthFormContainer'

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      lastName: "",
      firstName: ""
    }
  }

  render() {
    return (
      <div>
        {/* <h1>{userEmail}</h1> */}
      </div>
    );
  }

}

ProfilePage.propTypes = {
};

export default ProfilePage;