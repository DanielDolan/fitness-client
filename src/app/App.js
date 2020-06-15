import React, { Component } from "react";
import './App.css';
import RoutesContainer from "../components/routes/RoutesContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Test</h1>
        <header className="app-header">
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
