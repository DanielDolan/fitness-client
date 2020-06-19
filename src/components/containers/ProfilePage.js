import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfileThunk } from "../../thunks"
import { ProfileView } from "../views/";
// import AuthFormContainer from './AuthFormContainer'

//ProfileContainer
class ProfilePage extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchProfile();
  }

  render() {
    return (
      <div className="profile-container">

        <h1>This is a profile page</h1>
        <ProfileView profile={this.props.profile} />;
      </div>
    );
  }

}

// map state to props
const mapState = (state) => {
  return {
    profile: state.profile,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchProfile: (id) => dispatch(fetchProfileThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(ProfilePage);