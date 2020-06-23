import React, { Component } from "react";
import { me, getAllExercise, removeExercise } from "../../thunks";
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import "../views/styles/ProfilePageView.css"
// import AuthFormContainer from './AuthFormContainer'

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: "",
      email: "",
      password: "",
      lastName: "",
      firstName: "",
      weight: 0,
      weightGoal: 0,
      exerciseName: [],
      height: "",
      age: 0,
      birthday: "",
      // userImage: Image,
      rediretLogin: false,
      isLoggedIn: false,
      exerciseID: "",
      redirectToProfile: false
    }
  }
  componentDidMount() {
    this.props.me();
    this.props.getAllExercise(this.props.userID);
    console.log("profile",this.props)
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.me)
    if(prevProps.data !== this.props.data )
      this.props.getAllExercise(this.props.userID);
      console.log("")
  }

  handleRemoveExercise = currExerciseID => event => {
    event.preventDefault();
    console.log("user id is ", this.props.userID);
    console.log("exercise id is ", currExerciseID);
    this.setState({exerciseID: currExerciseID, redirectToProfile: true});
    this.props.removeExercise(this.props.userID,currExerciseID);
  };

  render() {
    if (this.state.redirectToProfile) {
      return (<Redirect to="/workouts"/>)
    }
    const displayWhenLogIn = (
      <div>
          <h1>Welcome, {this.props.firstName}!</h1>
          {/* <h1>last name {this.props.lastName}</h1> */}
          {/* card of stats hugging the top right */}
          <p>Starting Weight: {this.props.weight}</p>
          <p>Weight Goal: {this.props.weightGoal}</p>
          <p>Age: {this.props.age}</p>


         {/* <h1>birthday {this.props.birthday}</h1> */}
          {/* <h3>Saved Meals</h3>      hugging left side */}


          <h3>Saved Workouts</h3> {/* hugging right side */}
          {this.props.exerciseName.map(workout => (
            <div className="workout-card-view" key={workout.id}>
              <Link to={`/workouts/${workout.id}`}>
                <h2>{workout.displayName}</h2>
              </Link>
              {/* <button type="submit" onClick={this.handleRemoveExercise(workout.id)} name="removeExercise">Delete</button> */}
            </div>
          ))}
          
      </div>
    );
    const displayWhenNeedSignin = (
      <div>
        <h1>Please sign in first</h1>

      </div>
    )

//     function signedIn(){
//     if(this.props.isLoggedIn){
// console.log("logged in")
//       // <div>
//       //   <h1>Welcome, {this.props.fstName}!</h1>
//       //   {/* <h1>last name {this.props.lastName}</h1> */}

//       //   {/* card of stats hugging the top right */}
//       //   <p>Starting Weight: {this.props.weight}</p>
//       //   <p>Weight Goal: {this.props.weightGoal}</p>
//       //   <p>Age: {this.props.age}</p>


//       //   {/* <h1>birthday {this.props.birthday}</h1> */}
//       //   <h1>Saved Meals</h1>      {/* hugging left side */}
//       //   <h1>Saved Workouts</h1> {/* hugging right side */}
//       // </div>
//     }
//     else{
//       console.log("not signed in")
//     }
//     }



    return (
    <>{this.props.isLoggedIn? displayWhenLogIn:displayWhenNeedSignin}</>
    );
  }

}

ProfilePage.propTypes = {
};

const mapUser = state => {
   console.log("the state of the user",state.addedExercise)
  return {
    name: "user",
    displayName: "User",
    userID: state.user.id,
    exerciseName: state.addedExercise,
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
    me: () => dispatch(me()),
    getAllExercise: (userID) => dispatch(getAllExercise(userID)),
    removeExercise: (userID, exerciseID) => dispatch(removeExercise(userID, exerciseID))
  }
};

export default connect(mapUser, mapDispatchUser)(ProfilePage);