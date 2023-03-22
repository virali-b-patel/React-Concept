import React from "react";

const Hello = () => {
  // return (
  //   <div className="Hello" id="Hello">
  //     <h1>Hello, World</h1>
  //   </div>
  // );
  return React.createElement(
    "div",
    { className: "Hello", id: "Hello" },
    React.createElement("h1", null, "Hello India")
  );
};

export default Hello;
