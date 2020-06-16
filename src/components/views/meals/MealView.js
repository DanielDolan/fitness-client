import React from 'react';

const MealView = (props) => {
  console.log(props.meal)
  return (
    <div className="meal-view">
      <img src={props.meal} style={{
              width: "300px",
              height: "300px",
              objectFit: "fit",
              display: "block",
              //boxShadow: "0 10px 10px rgba(0,0,0,.7)",
            }} alt="picture of food"/>
    </div>
  )
};

export default MealView;