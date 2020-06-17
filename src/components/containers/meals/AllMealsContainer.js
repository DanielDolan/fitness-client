import React, { Component } from "react";
import "../../views/styles/meals/AllMealsView.css"
import SearchBar from "./SearchBar"
import { debounce } from "lodash";
import MealContainer from "./MealContainer"
import axios from "axios"
// import RoutesContainer from "../../routes/RoutesContainer"

const apiKey = process.env.REACT_APP_API_KEY;
const apiID = process.env.REACT_APP_API_ID;
const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey

console.log(mealsHome)

class AllMealsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
    };

    // this.handleTermChange = this.handleTermChange.bind(this);
  }

  componentDidMount() {
    axios.get(mealsHome).then((result) => {
      this.setState({ meals: result.data.hits});})
  }

  handleTermChange=(searchTerm) => {
    const urlString = `https://api.edamam.com/search?q=${searchTerm.replace(
      /\s/g,
      "+"
    )}&app_id=${apiID}&app_key=${apiKey}`;

    if (searchTerm.length !== 0) {
      
       axios.get(urlString).then((result) => {
         this.setState({ meals: result.data.hits })
       });
     } else {
       axios.get(mealsHome).then((result) => {
         this.setState({ meals: result.data.hits })
       });
     }

   
  }
  render() {
    return (
      <div>
        <div className="App-header">
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
        <MealContainer meals={this.state.meals} />
      </div>
    );
  }




}

export default AllMealsContainer;
