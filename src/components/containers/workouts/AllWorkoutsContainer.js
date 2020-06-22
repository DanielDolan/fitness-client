import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllWorkoutsThunk } from '../../../thunks';
import { AllWorkoutsView } from '../../views';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Smart container;
class AllWorkoutsContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      filterBy: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllWorkouts();
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
      choice = <AllWorkoutsView allWorkouts={this.props.allWorkouts} />
    }
    if (group === "chest") {
      choice = <AllWorkoutsView allWorkouts={chest} />
    }
    if (group === "abs") {
      choice = <AllWorkoutsView allWorkouts={abs} />
    }
    if (group === "arms") {
      choice = <AllWorkoutsView allWorkouts={arms} />
    }
    if (group === "back") {
      choice = <AllWorkoutsView allWorkouts={back} />
    }

    return (
      <div className="all-workouts-container">
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