import React from "react";

// function Greet() {
//   return <h1>Hello Vijay</h1>;
// }

// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Functional Component {props.name} , {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };
// export default Greet;

//2nd method
// const Greet = ({ name, heroName, children }) => {
//   return (
//     <div>
//       <h1>
//         Functional Component {name} , {heroName}
//       </h1>
//       {children}
//     </div>
//   );
// };
// export default Greet;

// 3rd method
const Greet = (props) => {
  const { name, heroName, children } = props;
  return (
    <div>
      <h1>
        Functional Component {name} , {heroName}
      </h1>
      {children}
    </div>
  );
};
export default Greet;
