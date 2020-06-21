import React from "react";
import "../styles/WorkoutView.css";

const WorkoutView = (props) => {
  return (
    <div className="workout">
      <img src={props.workout.imageUrl} style={{
        width: "300px",
        height: "300px",
        objectFit: "fit",
        display: "block",
        boxShadow: "0 10px 10px rgba(0,0,0,.7)",
        padding: "5px",
      }} alt={props.name}
      />
      <br></br>
      <h1>{props.workout.name}</h1>
      <p>Targeted Muscle Group: {props.workout.muscleGroup}</p>
      <p>Description: {props.workout.description}</p>
      <p>Recommended Reps: {props.workout.recomendedReps}</p>

      <button>Add(Coming Soon!)</button> {}
      <button>Delete(Coming Soon!)</button>

    </div>
  );
};

export default WorkoutView;