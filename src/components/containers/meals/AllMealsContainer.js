import React, { Component } from "react";
import "../../views/styles/meals/AllMealsView.css"
import SearchBar from "./SearchBar"
import { debounce } from "lodash";
import MealContainer from "./MealContainer"
import axios from "axios"
import { connect } from "react-redux";
import {fetchAllMealsThunk} from '../../../thunks';


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

  componentDidMount() {
    // axios.get(mealsHome).then((result) => {
    //   this.setState({ meals: result.data.hits});})
    this.props.fetchAllMeals()
  }

  // handleTermChange=(searchTerm) => {
  //   const urlString = `https://api.edamam.com/search?q=${searchTerm.replace(
  //     /\s/g,
  //     "+"
  //   )}&app_id=${apiID}&app_key=${apiKey}`;

  //   let id;

  //   if (searchTerm.length !== 0) {
  //     axios.get(urlString).then((result) => {
  //       id = result.data.hits[0].recipe.uri.substring(51)
  //       this.setState({ meals: result.data.hits })
  //       this.setState({ mealId: id })
  //     });
  //   } 
  //   else {
  //     axios.get(mealsHome).then((result) => {
  //       id = result.data.hits[0].recipe.uri.substring(51)
  //       this.setState({ meals: result.data.hits })
  //       this.setState({ mealId: id })
  //     });
  //   }
  // }

  render() {
    return (
      <div>
        {/* <div className="App-header">
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
        /> */}
        {/* <MealContainer meals={this.state.meals} /> */}
        {console.log(this.props.allMeals)}
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
    fetchAllMeals: () => dispatch(fetchAllMealsThunk())
  }
}

export default connect(mapState, mapDispatch)(AllMealsContainer);