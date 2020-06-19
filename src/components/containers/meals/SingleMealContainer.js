import React, { Component } from "react";
import { connect } from "react-redux";
import { SingleMealView } from "../../views"
import { fetchMealThunk } from "../../../thunks";

class SingleMealContainer extends Component {
  componentDidMount() {
    this.props.fetchMeal(this.props.match.params.id)
  }

  render() {
    return (
      <div className="single-meal-container">
        <SingleMealView meal={this.props.meal} />
      </div>
    );
  }
}

const mapState = state => {
  return {
    meal: state.meal
  }
}

const mapDispatch = dispatch => {
  return {
    fetchMeal: (id) => dispatch(fetchMealThunk(id))
  }
}


export default connect(mapState, mapDispatch)(SingleMealContainer);