import React, { useState } from "react";

const initState = {
  fname: "virali",
  lname: "patel",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    const newPerson = { ...person };
    newPerson.fname = "vijay";
    newPerson.lname = "patel";
    setPerson(newPerson);
  };

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
