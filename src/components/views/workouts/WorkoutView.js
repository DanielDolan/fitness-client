import React from "react";
import "../styles/WorkoutView.css";

const WorkoutView = (props) => {
  return (
    <div className="workout">
      <img src={props.workout.imageUrl} alt={props.name} />
      <h1>name: {props.workout.name}</h1>
      <p>targeted muscle group: {props.workout.muscleGroup}</p>
      <p>description: {props.workout.description}</p>
      <p>recommended sets: {props.workout.recSets}</p>

      {/* add to profile button */}
      {/* remove from profile button */}

    </div>
  );
};

export default WorkoutView;