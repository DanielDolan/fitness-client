import React from 'react';
import { Link } from "react-router-dom";
import "../styles/meals/AllMealsView.css";
const AllMealsView = (props) => {
  return (
    <div className="all-meals">
      {props.meals.map(meal =>
        <div class="meal-card-view" key={meal.uri}>
          <Link to={`/meals/${meal.uri.substring(51)}`}>
            <h2>{meal.label}</h2>
          </Link>
          <p>Total Calories: {Math.round(meal.calories)}</p>
          <img src={meal.image} style={{
            width: "300px",
            height: "300px",
            objectFit: "fit",
            display: "block",
            boxShadow: "0 10px 10px rgba(0,0,0,.7)",
            padding: "5px",
          }} alt={meal.label} />

          <br></br>
          <button>Add</button> {}
          <button>Delete</button>
        </div>)}
    </div>
  )
};

export default AllMealsView;