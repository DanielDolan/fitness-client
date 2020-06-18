import React from 'react';
import { Link } from "react-router-dom";

const AllMealsView = (props) => {
  return (


    <div className="meal-view">
      {/* <Link to={`/meals/${props.meal.uri.substring(51)}`}>
        <h1>{props.meal.label}</h1>
      </Link>

      <h3>{props.meal.label}</h3>
      <p>Total Calories: {props.meal.calories}</p>
      <img src={props.meal.image} style={{
              width: "300px",
              height: "300px",
              objectFit: "fit",
              display: "block",
              boxShadow: "0 10px 10px rgba(0,0,0,.7)",
              padding: "5px",
            }} alt="picture of food"/>
      <button>Add</button>
      <button>Delete</button> */}
      {props.meals.map(meal => <div key={meal.uri}>
        <Link to={`/meals/${meal.uri.substring(51)}`}>
        <h1>{meal.label}</h1>
        </Link>
      </div>)}

    </div>
  )
};

export default AllMealsView;