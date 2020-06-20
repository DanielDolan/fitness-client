import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllWorkoutsThunk } from '../../../thunks';
import { AllWorkoutsView } from '../../views';

import WorkoutFilterView from '../../views/WorkoutFilterView';

// Smart container;
class AllWorkoutsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllWorkouts();
  }

  render() {
    return (
      // <div>
        <div className="all-workouts-container">
          <WorkoutFilterView/>
    <AllWorkoutsView allWorkouts={this.props.allWorkouts} />
    
    </div>
    )
  }
}

// Map state to props;
const mapState = state => {
  return {
    allWorkouts: state.allWorkouts
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllWorkouts: () => dispatch(fetchAllWorkoutsThunk())
  }
}

// Type check props;
AllWorkoutsContainer.propTypes = {
  allWorkouts: PropTypes.array.isRequired,
  fetchAllWorkouts: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllWorkoutsContainer);