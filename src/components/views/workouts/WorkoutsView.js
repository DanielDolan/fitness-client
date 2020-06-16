import React from 'react';

const WorkoutsView = (image) => {
  return (
    <div className="workouts-view">
      <img src={image} style={{
              width: "300px",
              height: "300px",
              objectFit: "fit",
              display: "block",
              boxShadow: "0 10px 10px rgba(0,0,0,.7)",
            }}/>
    </div>
  )
};

export default WorkoutsView;