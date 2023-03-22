import React, { useState } from "react";

const initState = ["virali", "patel"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    const newPersons = [...persons];
    newPersons.push = "vijay";
    newPersons.push = "patel";
    setPersons(newPersons);
  };

  console.log("ArrayUseState Render");

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};
