import React from 'react';
import { Link } from "react-router-dom";

const AllMealView = (props) => {

  // const id = props.meal.uri.substring(51)
  //console.log(id)
  //console.log(props.meal)
  //console.log(props.meal)

  // let obj = props.meal
  // let result = Object.keys(obj).map(function(key) {
  //   return obj[key];
  // });

  //console.log(result)
  //console.log(result[0])

  return (

    // <div className="meal-view">
    //   {result.map(meal => (
    //     <div key={result[0].substring(51)}>
    //       <Link to={`/meals/${result[0].substring(51)}`}>
    //         <h1>{result[1]}</h1>
    //       </Link>
 
    //     </div>
    //   ))}
    // </div>

    <div className="meal-view">
      <Link to={`/meals/${props.meal.uri.substring(51)}`}>
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
      <button>Delete</button>
    </div>
  )
};

export default AllMealView;