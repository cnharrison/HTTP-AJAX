import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
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
