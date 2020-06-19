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
        padding: "10px",
      }} alt={props.name}
      />
      <br></br>
      <h1>{props.workout.name}</h1>
      <p>targeted muscle group: {props.workout.muscleGroup}</p>
      <p>description: {props.workout.description}</p>
      <p>recommended reps: {props.workout.recomendedReps}</p>

      {/* add to profile button */}
      {/* remove from profile button */}

    </div>
  );
};

export default WorkoutView;