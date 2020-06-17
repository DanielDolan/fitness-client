import React from 'react';
import MealItem from "../../views/meals/AllMealsView"
import PropTypes from "prop-types";

const MealContainer = (props) => {
  console.log("props.meals is " , props.meals)
  const mealItems = props.meals.map((meal,index) => {

    console.log("this is the meal console log" , meal)
    return <MealItem key={index} meal={meal.recipe} />
  });

  return (
    <div className="meal-container">{mealItems}</div>
  );
};

export default MealContainer;