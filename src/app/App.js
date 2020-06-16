import React, { Component } from "react";
import "./App.css";
//import SearchBar from "./Components/SearchBar";
import { debounce } from "lodash";
import request from "superagent";

const apiKey = process.env.REACT_APP_API_KEY;
const apiID = process.env.REACT_APP_API_ID;
const mealsHome = "https://api.edamam.com/search?q=chicken&app_id="+apiID+"&app_key="+apiKey+"&from=0&to=3&calories=591-722&health=alcohol-free"
const test = "https://api.edamam.com/search?q=chicken&app_id=b4ec86bf&app_key=331d54a3fbc80d1d2f09d263a2aa2e16&from=0&to=3&calories=591-722&health=alcohol-free"


function App() {

  console.log(mealsHome)
  console.log(test)
  return (
    <div>
  
    </div>
  );
}

export default App;
