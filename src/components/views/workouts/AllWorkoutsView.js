import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/AllWorkoutsView.css";
// import { DropdownButton } from 'reactstrap';

const AllWorkoutsView = props => {
  const {
    allWorkouts,
    handleAddExercise,
    handleRemoveExercise } = props;
  if (!props.allWorkouts.length) {
    return <div className="all-workouts">There are no workouts</div>;
  }
  // console.log(props.allWorkouts)
  console.log("All workout view props: " , handleAddExercise)
  return (
    <>

    <div className="all-workouts">
      {props.allWorkouts.map(workout => (
        <div className="workout-card-view" key={workout.id}>
          <Link to={`/workouts/${workout.id}`}>
            <h2>{workout.displayName}</h2>
          </Link>
          <img src={workout.imageUrl} style={{
          width: "300px",
          height: "300px",
          objectFit: "fit",
          display: "block",
          boxShadow: "0 10px 10px rgba(0,0,0,.7)",
          padding: "5px",
           }} alt={workout.name} />
          
          <br></br>
          <p>{workout.muscleGroup}</p>
          <p>{workout.description}</p>

          <button type="submit" onClick={handleAddExercise(workout.id)} name="addExercise">Add</button> {}
          <button type="submit" onClick={handleRemoveExercise(workout.id)} name="removeExercise">Delete</button>
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