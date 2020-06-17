import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/meals/MealView.css";

const AllMealsView = props => {
  if (!props.allMeals.length) {
    return <div className="all-meals">There are no meals.</div>;
  }

  return (
    <>

    <div className="all-meals">
      {props.allMeals.map(meal => (
        <div key={meal.id}>
          <Link to={`/meals/${meal.id}`}>
            <h1>{meal.label}</h1>
          </Link>
          <img src={meal.imageUrl} width="200px" alt={meal.label} />

        </div>
      ))}
    </div>

    </>
  );
};

AllMealsView.propTypes = {
  allMeals: PropTypes.array.isRequired
};

export default AllMealsView;