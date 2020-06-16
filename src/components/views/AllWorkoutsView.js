import React from "react";
import "./styles/AllWorkoutsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllWorkoutsView = props => {
  if (!props.allWorkouts.length) {
    return <div className="all-workouts">There are no workouts</div>;
  }

  return (
    <div className="all-workouts">
      {props.allWorkouts.map(workout => (
        <div key={workout.id}>
          <Link to={`/workouts/${workout.id}`}>
            <h1>{workout.name}</h1>
          </Link>
          <img src={workout.imageUrl} width="200px" alt={workout.name} />
          <p>{workout.muscleGroup}</p>
          <p>{workout.description}</p>
        </div>
      ))}
    </div>
  );
};

AllWorkoutsView.propTypes = {
  allWorkouts: PropTypes.array.isRequired
};

export default AllWorkoutsView;