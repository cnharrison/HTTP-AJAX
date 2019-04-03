import React, { Component } from "react";

function Friend(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Name: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default Friend;
