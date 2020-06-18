import React from "react";
import "../styles/meals/SingleMealView.css"

const SingleMealView = (props) => {
  return (
    <div className="meal">
      <h1>SingleMealView.js</h1>
      <img src={props.meal.image} alt={props.label} />
      <h1>Name: {props.meal.label}</h1>
      {/* <p>targeted muscle group: {props.meal.muscleGroup}</p>
      <p>description: {props.meal.description}</p>
      <p>recommended sets: {props.meal.recSets}</p> */}

      {/* add to profile button */}
      {/* remove from profile button */}

    </div>
  );
};

export default SingleMealView;