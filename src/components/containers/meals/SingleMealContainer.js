import React, { Component } from "react";
// import { connect } from "react-redux";
// import { SingleMealView } from "../../views"
// import { fetchMealThunk } from "../../../thunks";
import axios from "axios";
// import MealContainer from "./MealContainer"
import MealCard from "./MealCard"

const apiKey = process.env.REACT_APP_API_KEY;
const apiID = process.env.REACT_APP_API_ID;
const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey


class SingleMealContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meal: {}
    }
  }

  componentDidMount() {
    axios.get(mealsHome).then((result) => {
      this.setState({ meals: result.data.hits});})
  }

  render() {
    
    return (
      <div className="single-meal-container">
        <h1>single meal page</h1>
        <MealCard meals={this.state.meals} />
      </div>
    );
  }
}

export default SingleMealContainer;