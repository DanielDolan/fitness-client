import React from "react";
//import "../styles/WorkoutView.css";

const ProfileView = (props) => {
  console.log(props)
  return (
    <div className="profile">
      {props.profile.map(profile => (
        <div key={profile.id}>
          <h1>first name: {profile.firstName}</h1>
        </div>
      ))}


    </div>
  );
};

export default ProfileView;