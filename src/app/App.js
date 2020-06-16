import React, { Component } from "react";
import "./App.css";
import SearchBar from "../components/containers/meals/SearchBar"
import { debounce } from "lodash";
import request from "superagent";
import MealContainer from "../components/containers/meals/MealContainer"
import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY;
const apiID = process.env.REACT_APP_API_ID;
const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey+"&from=0&to=3&calories=591-722&mealtype=lunch"

console.log(mealsHome)

class App extends Component {
  constructor() {
    super();

    this.state = {
      meals: [],
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }
  componentDidMount() {
    axios.get(mealsHome)
    .then((result) => {
      //console.log(result.hits[0].recipe.healthLabels)
      console.log(result)
      this.setState({ meals: result.data.hits});})
  }

  handleTermChange(searchTerm) {
    const urlString = `https://api.edamam.com/search?q=${searchTerm.replace(
      /\s/g,
      "+"
    )}&app_id=${apiID}&api_key=${apiKey}`;

    if (searchTerm.length !== 0) {
      
       request.get(urlString, (result) => {
         this.setState({ meals: result.data.hits })
       });
     } else {
       request.get(mealsHome, (result) => {
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

export default App;
