import React from "react";
import "./styles/AllWorkoutsView.css";
import PropTypes from "prop-types";

const AllWorkoutsView = props => {
  return (
    <div className="all-workouts">
      {props.allWorkouts.map(workout => (
        <div key={workout.id}>
          <h1>{workout.name}</h1>
        </div>
      ))}
    </div>
  );
};

AllWorkoutsView.propTypes = {
  allWorkouts: PropTypes.array.isRequired
};

export default AllWorkoutsView;