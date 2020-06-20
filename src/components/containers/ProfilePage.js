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
      weight: 0,
      weightGoal: 0,
      height: 0,
      age: 0,
      birthday: "",
      // userImage: Image,
      rediretLogin: false,
      isLoggedIn: false,
    }
  }
  componentDidMount() {
    this.props.me();
    console.log(this.props.firstName);
  }



  render() {

    function signedIn(){
    if(this.props.isLoggedIn){
console.log("logged in")
      // <div>
      //   <h1>Welcome, {this.props.fstName}!</h1>
      //   {/* <h1>last name {this.props.lastName}</h1> */}

      //   {/* card of stats hugging the top right */}
      //   <p>Starting Weight: {this.props.weight}</p>
      //   <p>Weight Goal: {this.props.weightGoal}</p>
      //   <p>Age: {this.props.age}</p>


      //   {/* <h1>birthday {this.props.birthday}</h1> */}
      //   <h1>Saved Meals</h1>      {/* hugging left side */}
      //   <h1>Saved Workouts</h1> {/* hugging right side */}
      // </div>
    }
    else{
      console.log("not signed in")
    }
    }



    return (
      
      <div>
        {signedIn()}
        <h1>Welcome, {this.props.firstName}!</h1>
        {/* <h1>last name {this.props.lastName}</h1> */}

        {/* card of stats hugging the top right */}
        <p>Starting Weight: {this.props.weight}</p>
        <p>Weight Goal: {this.props.weightGoal}</p>
        <p>Age: {this.props.age}</p>


        {/* <h1>birthday {this.props.birthday}</h1> */}
        <h1>Saved Meals</h1>      {/* hugging left side */}
        <h1>Saved Workouts</h1> {/* hugging right side */}
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