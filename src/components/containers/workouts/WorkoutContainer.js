import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWorkoutThunk } from "../../../thunks";
import { WorkoutView } from "../../views";

class WorkoutContainer extends Component {
  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.id);
  }

  render() {
    return <WorkoutView workout={this.props.workout} />;
  }
}

// map state to props
const mapState = (state) => {
  return {
    workout: state.workout,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchWorkout: (id) => dispatch(fetchWorkoutThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(WorkoutContainer);