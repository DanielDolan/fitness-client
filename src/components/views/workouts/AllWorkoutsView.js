import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';

const AllWorkoutsView = props => {
  if (!props.allWorkouts.length) {
    return <div className="all-workouts">There are no workouts</div>;
  }

  return (
    <>

    <DropdownButton id="dropdown-basic-button" title="Filter by category">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>

    <div className="all-workouts">
      {props.allWorkouts.map(workout => (
        <div key={workout.id}>
          <Link to={`/workouts/${workout.id}`}>
            <h1>{workout.name}</h1>
          </Link>
          <img src={workout.imageUrl} style={{
          width: "300px",
          height: "300px",
          objectFit: "fit",
          display: "block",
          boxShadow: "0 10px 10px rgba(0,0,0,.7)",
          padding: "5px",
           }} alt={workout.name} />

          <p>{workout.muscleGroup}</p>
          <p>{workout.description}</p>

          <button>Add</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
    </>
  );
};

AllWorkoutsView.propTypes = {
  allWorkouts: PropTypes.array.isRequired
};

export default AllWorkoutsView;