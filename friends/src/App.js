import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Friend from "./components/friend/Friend";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: 0,
        email: "",
        id: 0
      }
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/friends").then(response => {
      this.setState({ friends: response.data });
    });
  };

  inputHandler = event => {
    event.persist();
    let value = event.target.value;
    this.setState(prevState => ({
      friend: { ...prevState.friend, [event.target.name]: value }
    }));
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhosst:3333/items", this.state.friend)
      .then(response => {
        this.setState(prevState => ({
          friends: [...prevState.friends, response.data]
        }));
      })
      .catch(err => console.log(err));
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
              name="name"
              value={this.state.friend.name}
              placeholder="add friend name"
              onChange={this.inputHandler}
            />
            <input
              type="text"
              name="age"
              value={this.state.friend.age}
              placeholder="add friend age"
              onChange={this.inputHandler}
            />
            <input
              type="email"
              name="email"
              value={this.state.friend.email}
              placeholder="add friend email"
              onChange={this.inputHandler}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
