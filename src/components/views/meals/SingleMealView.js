import React from "react";
import "../styles/meals/SingleMealView.css"

const SingleMealView = (props) => {
  let protein;
  let carbs;
  let sodium;
  let fat;
  if (props.meal && props.meal.totalNutrients) {
    protein = props.meal.totalNutrients.PROCNT.quantity;
  }
  if (props.meal && props.meal.totalNutrients) {
    carbs = props.meal.totalNutrients.CHOCDF.quantity;
  }
  if (props.meal && props.meal.totalNutrients) {
    sodium = props.meal.totalNutrients.NA.quantity;
  }
  if (props.meal && props.meal.totalNutrients) {
    fat = props.meal.totalNutrients.FAT.quantity;
  }
  let cookingTime = props.meal.totalTime;

  function cookingTimeFunction() {
    if (cookingTime === 0) {
    }
    else {
      return (<p>Cooking Time: {cookingTime} minutes</p>)
    }
  }

  let dietFacts = props.meal.dietLabels;
  function dietFactsFunction() {
    if (dietFacts === undefined || dietFacts.length == 0) {
    }
    else {
      return (<p>Diet Facts: {dietFacts}</p>)
    }
  }

  return (
    <div className="single-meal-view">
      <h1>{props.meal.label}</h1>
      <img src={props.meal.image} alt={props.label} /><br></br><br></br>
      <a href={props.meal.url}> Recipe Instructions</a><br></br><br></br>
      <p>Serving Size: {props.meal.yield}</p>
      <p>Total Calories: {Math.round(props.meal.calories)}</p>
      <p>{dietFactsFunction()}</p>
      <p>{cookingTimeFunction()}</p>
      <p>Total Protein: {Math.round(protein)} </p>
      <p>Carbs: {Math.round(carbs)} </p>
      <p>Sodium: {Math.round(sodium)} </p>
      <p>Fat: {Math.round(fat)} </p>




      <button>Add(Coming Soon!)</button> {}
      <button>Delete(Coming Soon!)</button>

    </div>
  );
};

export default SingleMealView;