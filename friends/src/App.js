import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(response => {
      console.log(response);
    });
  };
  render() {
    return (
      <div className="App">
        <h1>What what</h1>
      </div>
    );
  }
}

export default App;
