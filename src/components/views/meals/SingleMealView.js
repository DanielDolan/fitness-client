import React from "react";
import "../styles/meals/SingleMealView.css"

const SingleMealView = (props) => {
  return (
    <div className="single-meal-view">

      {/* test */}
      <p>single meal view</p>


      <img src={props.meal.image} alt={props.label} />
      <h1>Name: {props.meal.label}</h1>
      <p>Total Calories: {props.meal.calories}</p>
      <p>id: {props.meal.uri}</p>

      {/* add to profile button */}
      {/* remove from profile button */}

    </div>
  );
};

export default SingleMealView;