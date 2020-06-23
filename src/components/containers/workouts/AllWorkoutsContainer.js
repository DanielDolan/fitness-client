import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllWorkoutsThunk,addExercise,removeExercise,me } from '../../../thunks';
import { AllWorkoutsView } from '../../views';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "../../views/styles/AllWorkoutsView.css"

// Smart container;
class AllWorkoutsContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      filterBy: "",
      userID: "",
      exerciseID: ""
    };
  }

  componentDidMount() {
    this.props.fetchAllWorkouts();
    this.props.me();
    // this.props.addExercise();
    // this.props.removeExercise();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  setFilter = (muscleGroup) => {
    this.setState({
      filterBy: muscleGroup
    })
  }

  handleAddExercise = currExerciseID => event => {
    event.preventDefault();
    this.setState({exerciseID: currExerciseID});
    this.props.addExercise(this.props.userID,currExerciseID);
    alert("Exercise added!")
  };

  handleRemoveExercise = currExerciseID => event => {
    event.preventDefault();
    console.log("user id is ", this.props.userID);
    console.log("exercise id is ", currExerciseID);
    this.setState({exerciseID: currExerciseID});
    this.props.removeExercise(this.props.userID,currExerciseID);
    alert("Exercise removed!")
  };

  render() {

    function filterByValue(array, string) {
      return array.filter(o => {
        return Object.keys(o).some(k => {
          if (typeof o[k] === 'string')
            return o[k].includes(string);
        });
      });
    }

    const chest = filterByValue(this.props.allWorkouts, "Chest")
    const abs = filterByValue(this.props.allWorkouts, "Abs")
    const arms = filterByValue(this.props.allWorkouts, "Arms")
    const back = filterByValue(this.props.allWorkouts, "Back")

    const group = this.state.filterBy
    let choice
    if (group === "all") {
      choice = <AllWorkoutsView handleAddExercise={this.handleAddExercise} 
                  handleRemoveExercise={this.handleRemoveExercise} 
                  allWorkouts={this.props.allWorkouts} />
    }
    if (group === "chest") {
      choice = <AllWorkoutsView  handleAddExercise={this.handleAddExercise}
        handleRemoveExercise={this.handleRemoveExercise}
        allWorkouts={chest} />
    }
    if (group === "abs") {
      choice = <AllWorkoutsView handleAddExercise={this.handleAddExercise}
        handleRemoveExercise={this.handleRemoveExercise}
       allWorkouts={abs} />
    }
    if (group === "arms") {
      choice = <AllWorkoutsView handleAddExercise={this.handleAddExercise}
        handleRemoveExercise={this.handleRemoveExercise}
        allWorkouts={arms} />
    }
    if (group === "back") {
      choice = <AllWorkoutsView handleAddExercise={this.handleAddExercise}
        handleRemoveExercise={this.handleRemoveExercise}
       allWorkouts={back} />
    }

    return (
      <div className="all-workouts-container">
        <h2>Workouts</h2>
        <div className="dropdown">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <Button onClick={() => this.setFilter("all")}>View All</Button>  {'  '}
            <DropdownToggle caret>Filter by Workout</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.setFilter("chest")}>Chest</DropdownItem>
              <DropdownItem onClick={() => this.setFilter("abs")}>Abs</DropdownItem>
              <DropdownItem onClick={() => this.setFilter("arms")}>Arms</DropdownItem>
              <DropdownItem onClick={() => this.setFilter("back")}>Back</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <br></br>

        {choice}
        <div className="all-workouts"></div>
      </div>
    )
  }
}

// Map state to props;
const mapState = state => {
  return {
    allWorkouts: state.allWorkouts,
    userID: state.user.id,
     exerciseID: state.exerciseID
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllWorkouts: () => dispatch(fetchAllWorkoutsThunk()),
    me: () => dispatch(me()),
    addExercise: (userID, exerciseID) => dispatch(addExercise(userID, exerciseID)),
    removeExercise: (userID, exerciseID) => dispatch(removeExercise(userID, exerciseID))
  }
}

// Type check props;
AllWorkoutsContainer.propTypes = {
  allWorkouts: PropTypes.array.isRequired,
  fetchAllWorkouts: PropTypes.func.isRequired
}

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllWorkoutsContainer);