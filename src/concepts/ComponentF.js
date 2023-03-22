import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hi {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
