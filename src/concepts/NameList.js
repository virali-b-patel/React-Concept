// import React from "react";
// import Person from "./Person";

// function NameList() {
//   const names = ["Virali", "Vijay", "Dishang", "Virali"];
//   const persons = [
//     {
//       id: 1,
//       name: "virali",
//       age: 26,
//       skill: "React",
//     },
//     {
//       id: 2,
//       name: "vijay",
//       age: 27,
//       skill: "JavaScript",
//     },
//     {
//       id: 3,
//       name: "Dishang",
//       age: 18,
//       skill: "HSC",
//     },
//   ];
//   const NameList = names.map((name, index) => (
//     <h2 key={index}>
//       {index} {name}
//     </h2>
//   ));
//   return <div>{NameList}</div>;
// }

// export default NameList;

import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "virali",
      age: 27,
      skill: "React",
    },
    {
      id: 2,
      name: "vijay",
      age: 28,
      skill: "JS",
    },
    {
      id: 3,
      name: "vir",
      age: 1,
      skill: "Fun",
    },
  ];
  const personsList = persons.map((person) => (
    <Person key={person.age} person={person} />
  ));
  return <div>{personsList}</div>;
}

export default NameList;
