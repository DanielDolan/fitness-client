import React from 'react';
import AllMealsView from "../../views/meals/AllMealsView"

const MealContainer = (props) => {

  //console.log(props.meals.recipe)

  const mealItems = props.meals.map((meal,index) => {
    return <AllMealsView key={index} meal={meal.recipe} />
  });

  //console.log(mealItems)

  return (
    <div className="meal-container">{mealItems}</div>
  );
};

export default MealContainer;