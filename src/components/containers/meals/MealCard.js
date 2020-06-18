import React from 'react';
import SingleMealView from "../../views/meals/SingleMealView"

const MealCard = (props) => {

  console.log(props.meals)

  // fix
  const mealItems = props.meals.map((meal,index) => {
    return <SingleMealView key={index} meal={meal.recipe} />
  });

  console.log({mealItems})

  return (
    <div className="meal-container">{mealItems}</div>
  );
};

export default MealCard;