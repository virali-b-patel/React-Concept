import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //Short-circuit operator//
    // return this.state.isLoggedIn && <div>Welcome Vijay</div>;
    //Turnery Operator//
    return this.state.isLoggedIn ? (
      <div>Welcome Vijay</div>
    ) : (
      <div>Welcome Virali</div>
    );
    // //variable//
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vijay</div>;
    // } else {
    //   message = <div>Welcome Virali</div>;
    // }
    // return <div>{message}</div>;
    // //if else condition//
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vijay</div>;
    // } else {
    //   return <div>Welcome Virali</div>;
    // }
    // return;
    // <div>
    //   <div>Welcome Vijay</div>;<div>Welcome virali</div>;
    // </div>;
  }
}

export default UserGreeting;
