import React from 'react';
import { Link } from "react-router-dom";


const AllMealsView = (props) => {
  console.log(props.meal)
  return (
    <div className="meal-view">
      {/* <Link to={`/meals/${meal.recipe.id}`}
      >
            <h1>{props.meal.label}</h1>
            </Link> */}

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
            <button>Delete</button>
    </div>
  )
};

export default AllMealsView;