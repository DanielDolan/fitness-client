import React, { Component } from "react";
import "../../views/styles/meals/AllMealsView.css"
import SearchBar from "./SearchBar"
import { debounce } from "lodash";
import MealContainer from "./MealContainer"
import axios from "axios"
import { connect } from "react-redux";
import { fetchAllMealsThunk } from '../../../thunks';
import AllMealsView from "../../views/meals/AllMealsView"


// const apiKey = process.env.REACT_APP_API_KEY;
// const apiID = process.env.REACT_APP_API_ID;
// const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey

class AllMealsContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     meals: [],
  //     mealId: "",
  //   };
  // }

  // componentDidMount() {
  //   // axios.get(mealsHome).then((result) => {
  //   //   this.setState({ meals: result.data.hits});})

  //   this.props.fetchAllMeals()
  //   //this.props.fetchAllMeals(this.props.match.params.id)
  // }

  handleTermChange = (searchTerm) => {
    // const urlString = `https://api.edamam.com/search?q=${searchTerm.replace(
    //   /\s/g,
    //   "+"
    // )}&app_id=${apiID}&app_key=${apiKey}`;

    let id;

    if (searchTerm.length !== 0) {
      // axios.get(urlString).then((result) => {
      //   id = result.data.hits[0].recipe.uri.substring(51)
      //   this.setState({ meals: result.data.hits })
      //   this.setState({ mealId: id })
      // });
      console.log(searchTerm)
      console.log(this.props.match.params.searchTerm)
      this.props.fetchAllMeals(this.props.match.params.searchTerm)
    }
    else {
      // axios.get(mealsHome).then((result) => {
      //   id = result.data.hits[0].recipe.uri.substring(51)
      //   this.setState({ meals: result.data.hits })
      //   this.setState({ mealId: id })
      // });
      // this.props.fetchAllMeals()
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
          onTermChange={debounce(this.handleTermChange, 1000)}
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