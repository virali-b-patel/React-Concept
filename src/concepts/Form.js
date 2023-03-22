// import React, { Component } from "react";

// export class Form extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       comments: "",
//       topic: "",
//     };
//   }

//   usernameChange = (event) => {
//     this.setState({
//       username: event.target.value,
//     });
//   };

//   commentsChange = (event) => {
//     this.setState({
//       comments: event.target.value,
//     });
//   };

//   topicChange = (event) => {
//     this.setState({
//       topic: event.target.value,
//     });
//   };

//   submit = (event) => {
//     alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <div>
//           <label>Username</label>
//           <input
//             type="text"
//             value={this.state.username}
//             onChange={this.usernameChange}
//           />
//         </div>
//         <div>
//           <label>Comments</label>
//           <textarea
//             value={this.state.comments}
//             onChange={this.commentsChange}
//           ></textarea>
//         </div>
//         <div>
//           <label>Topic</label>
//           <select value={this.state.topic} onChange={this.topicChange}>
//             <option value="react">React</option>
//             <option value="angular">Angular</option>
//             <option value="vue">Vue</option>
//           </select>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }
// export default Form;

import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  commentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  topicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={this.usernameChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.commentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.topicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
