import React from "react";
import "../styles/AllWorkoutsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DropdownButton } from 'reactstrap';

const AllWorkoutsView = props => {
  if (!props.allWorkouts.length) {
    return <div className="all-workouts">There are no workouts</div>;
  }

  return (
    <>

    {/* <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
      </ul>
    </div>  */}

    {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton> */}

    <div className="all-workouts">
      {props.allWorkouts.map(workout => (
        <div key={workout.id}>
          <Link to={`/workouts/${workout.id}`}>
            <h1>{workout.name}</h1>
          </Link>
          <img src={workout.imageUrl} width="200px" alt={workout.name} />
          <p>{workout.muscleGroup}</p>
          <p>{workout.description}</p>

          {/* add to profile button */}
          {/* remove from profile button */}
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