import React, { Component } from "react";
import "../../views/styles/meals/AllMealsView.css"
import AllMealsView from "../../views/meals/AllMealsView"
import SearchBar from "./SearchBar"
import { debounce } from "lodash";
import { connect } from "react-redux";
import { fetchAllMealsThunk } from '../../../thunks';

class AllMealsContainer extends Component {

  componentDidMount() {
    this.props.fetchAllMeals("undefined")
  }

  handleTermChange = (searchTerm) => {
    this.props.fetchAllMeals(searchTerm)
  }

  render() {
    return (
      <div>
        <div className="all-meals-container">
          <h2>Meal Search</h2>
        </div>
        <SearchBar
          style={{
            fontSize: 24,
            width: "40%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 10,
          }}
          onTermChange={debounce((searchTerm) => this.handleTermChange(searchTerm), 1000)}
        />
        <AllMealsView meals={this.props.allMeals} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    allMeals: state.allMeals
  }
}

const mapDispatch = dispatch => {
  return {
    fetchAllMeals: (searchTerm) => dispatch(fetchAllMealsThunk(searchTerm))
  }
}

export default connect(mapState, mapDispatch)(AllMealsContainer);