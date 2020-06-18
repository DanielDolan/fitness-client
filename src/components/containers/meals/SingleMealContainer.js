import React, { Component } from "react";
import { connect } from "react-redux";
 import { SingleMealView } from "../../views"
import { fetchMealThunk } from "../../../thunks";
import axios from "axios";
// import MealContainer from "./MealContainer"
import MealCard from "./MealCard"


// const apiKey = process.env.REACT_APP_API_KEY;
// const apiID = process.env.REACT_APP_API_ID;
// const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey


class SingleMealContainer extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     meal: {}
  //   }
  // }

  componentDidMount() {
    this.props.fetchMeal(this.props.match.params.id)
  }

  render() {
    
    return (
      <div className="single-meal-container">
        <h1>single meal page</h1>
        <SingleMealView meal={this.props.meal} />
        {console.log(this.props.meal)}
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