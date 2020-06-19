import React from 'react';
import { Link } from "react-router-dom";

const AllMealsView = (props) => {
  return (
    <div className="meal-view">
      {props.meals.map(meal => <div key={meal.uri}>
        <Link to={`/meals/${meal.uri.substring(51)}`}>
          <h1>{meal.label}</h1>
        </Link>
        <p>Total Calories: {meal.calories}</p>
        <img src={meal.image} style={{
          width: "300px",
          height: "300px",
          objectFit: "fit",
          display: "block",
          boxShadow: "0 10px 10px rgba(0,0,0,.7)",
          padding: "5px",
        }} alt="picture of food" />
        <button>Add</button>
        <button>Delete</button>
      </div>)}

    </div>
  )
};

export default AllMealsView;