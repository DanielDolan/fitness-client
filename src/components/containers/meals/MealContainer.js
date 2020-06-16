import React from 'react';
import MealItem from "../../views/meals/MealView"

const MealContainer = (props) => {
  const mealItems = props.meals.map((meal,index) => {

    console.log("this is the meal console log" , meal)
    return <MealItem key={index} meal={meal.recipe} />
  });

  return (
    <div className="meal-container">{mealItems}</div>
  );
};

export default MealContainer;