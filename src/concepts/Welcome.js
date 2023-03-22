import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Class Component {this.props.name} , {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;

//2nd method
// import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     const { name, heroName } = this.props;
//     return (
//       <h1>
//         Class Component {name} , {heroName}
//       </h1>
//     );
//   }
// }

// export default Welcome;
