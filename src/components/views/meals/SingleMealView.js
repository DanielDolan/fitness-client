import React from "react";
import "../styles/meals/SingleMealView.css"

const SingleMealView = (props) => {
  return (
    <div className="single-meal-view">
      <h1>Name: {props.meal.label}</h1>
      <img src={props.meal.image} alt={props.label} />
      <p>Total Calories: {props.meal.calories}</p>
      <a href={props.meal.url}> Recipe Instructions</a>
      <p>Diet Facts (Name can change): {props.meal.dietLabels}</p>
      <p>Cooking Time: {props.meal.totalTime} minutes</p>
      {/* <p>Total Protein: {props.meal.totalNutrients} </p> */}

      <button>Add</button>
      <button>Delete</button>

    </div>
  );
};

export default SingleMealView;