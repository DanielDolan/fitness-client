import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { fetchAllWorkoutsThunk } from '../../thunks';


export default class WorkoutFilterView extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  
//   componentDidMount() {
//     console.log(this.props);
//     this.props.fetchAllWorkouts();
//   }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Workout Filters
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => console.log("hello")}>Chest</DropdownItem>
          <DropdownItem onClick={() => console.log("hello")}>Abs</DropdownItem>
          <DropdownItem onClick={() => console.log("hello")}>Arms</DropdownItem>
          <DropdownItem onClick={() => console.log("hello")}>Back</DropdownItem>
          <DropdownItem onClick={() => console.log("hello")}>Legs</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}