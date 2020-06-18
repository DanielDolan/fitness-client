import React from "react";
import "../styles/meals/SingleMealView.css"



const SingleMealView = (props) => {
  let protein;
  let carbs;
  let sodium;
  let fat;
  if(props.meal&&props.meal.totalNutrients){
    protein = props.meal.totalNutrients.PROCNT.quantity;
  }
  if(props.meal&&props.meal.totalNutrients){
   carbs = props.meal.totalNutrients.CHOCDF.quantity;
  }
  if(props.meal&&props.meal.totalNutrients){
    sodium = props.meal.totalNutrients.NA.quantity;
   }
   if(props.meal&&props.meal.totalNutrients){
    fat = props.meal.totalNutrients.FAT.quantity;
   }

  return (
    <div className="single-meal-view">
      <h1>{props.meal.label}</h1>
      <img src={props.meal.image} alt={props.label} />
      <p>Serving Size: {props.meal.yield}</p>
      <p>Total Calories: {props.meal.calories}</p>
      <a href={props.meal.url}> Recipe Instructions</a>
      <p>Diet Facts (Name can change): {props.meal.dietLabels}</p>
      <p>Cooking Time: {props.meal.totalTime} minutes</p>
      <p>Total Protein: {protein} </p>
      <p>Carbs: {carbs} </p>
      <p>Sodium: {sodium} </p>
      <p>Fat: {fat} </p>




      <button>Add</button>
      <button>Delete</button>

    </div>
  );
};

export default SingleMealView;