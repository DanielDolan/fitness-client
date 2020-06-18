import React from "react";
import "../styles/MealView.css";

const MealView = (props) => {
  return (
    <div className="Meal">
      <img src={props.meal.image} alt={props.name} />
      <h1>{props.meal.label}</h1>
      <p>Total Calories: {props.meal.calories}</p>
      <p>Recipe: {props.meal.url}</p>
      <p>Proteins: {props.meal.totalNutrients.PROCNT.quantity}</p>

      <button>Add</button>
      <button>Delete</button>

    </div>
  );
};

export default MealView;