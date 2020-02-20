import React from "react";

const Person = props => {
  return (
    <div>
      {props.member.map(person => (
        <div  key={person.id}>
            <h1>Name:{person.name}</h1>
          <h2>Email:{person.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default Person;
