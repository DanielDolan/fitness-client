import React from "react";
import WorkoutView from "./workouts/WorkoutView";
import "../views/styles/ProfileView.css";

const ProfileView = (props) => {
  console.log("ProfileView.js", props.profile.exercise)
  return (
    <div className="profile">
      <h1>Profile:</h1>
      <h3>{props.profile.firstName} {props.profile.lastName}</h3>
      <p>{props.profile.email}</p>
      
      display workouts here
    </div>
  );
};

export default ProfileView;