import React, { Component } from "react";
import { NavBarView } from "../views";
import { me } from "../../thunks";
import { connect } from 'react-redux';

class NavBarContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      isLoggedIn: true
    }
  }

  // componentDidMount(){
  //   this.props.me()
  //   console.log(1)
  //   console.log(this.props.me)
  //   console.log(2)
  // }
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.me)
    if(prevProps.data !== this.props.data )
    this.props.me();
    console.log(this.props.firstName);
  }

  render() {
    return <NavBarView firstName={this.props.firstName} isLoggedIn={this.props.isLoggedIn}/>;
  }
}

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

export default connect(mapUser, mapDispatchUser)(NavBarContainer);
