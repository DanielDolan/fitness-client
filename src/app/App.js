import React, { Component } from "react";
import './App.css';
import RoutesContainer from "../components/routes/RoutesContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Test</h1>
        <div className="app-header">
          <RoutesContainer />
        </div>
      </div>
    );
  }
}

export default App;