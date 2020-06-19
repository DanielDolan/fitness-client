import React, { Component } from "react";
import "../../views/styles/meals/AllMealsView.css"
import SearchBar from "./SearchBar"
import { debounce } from "lodash";
// import MealContainer from "./MealContainer"
// import axios from "axios"
import { connect } from "react-redux";
import { fetchAllMealsThunk } from '../../../thunks';
import AllMealsView from "../../views/meals/AllMealsView"


// const apiKey = process.env.REACT_APP_API_KEY;
// const apiID = process.env.REACT_APP_API_ID;
// const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey

class AllMealsContainer extends Component {
  // componentDidMount() {
  //   // axios.get(mealsHome).then((result) => {
  //   //   this.setState({ meals: result.data.hits});})

  //   this.props.fetchAllMeals()
  //   //this.props.fetchAllMeals(this.props.match.params.searchTerm)
  // }

  handleTermChange = (searchTerm) => {
    if (searchTerm.length !== 0) {
      console.log(searchTerm)
      console.log(this.props.match.params.searchTerm)
      this.props.fetchAllMeals(searchTerm)
    }
    else {
      //this.props.fetchAllMeals()
    }
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
        {/* <MealContainer meals={this.state.meals} /> */}

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
    //fetchAllMeals: () => dispatch(fetchAllMealsThunk())
    fetchAllMeals: (searchTerm) => dispatch(fetchAllMealsThunk(searchTerm))
  }
}

export default connect(mapState, mapDispatch)(AllMealsContainer);