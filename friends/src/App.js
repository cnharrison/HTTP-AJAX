import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friend from "./components/friend/Friend";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      addFriendName: "",
      addFriendAge: 0,
      addFriendEmail: ""
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(response => {
      this.setState({ friends: response.data });
    });
  };

  inputHandler = (event, toChange) => {
    this.setState({ [toChange]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log("submitted yo!");
  };
  render() {
    return (
      <div className="App">
        <div className="friends-display">
          <h1>What what</h1>
          {this.state.friends.map((friend, index) => (
            <Friend
              name={friend.name}
              email={friend.email}
              age={friend.age}
              key={index}
            />
          ))}
        </div>
        <div className="new-friend-form">
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="addFriendName"
              value={this.state.addFriendName}
              placeholder="add friend name"
              onChange={(event) => this.inputHandler(event, 'addFriendName')}
            />
            <input
              type="text"
              name="addFriendAge"
              value={this.state.addFriendAge}
              placeholder="add friend age"
              onChange={(event) => this.inputHandler(event, 'addFriendAge')}
            />
            <input
              type="email"
              name="addFriendEmail"
              value={this.state.addFriendEmail}
              placeholder="add friend email"
              onChange={(event) => this.inputHandler(event, 'addFriendEmail')}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
