import React from "react";
import "./Person.css";
const person = (props) => {
  return <div className="Person">
    <p onClick={props.click}>
  I'm a Person and I'm {Math.floor(Math.random() * 30)} years old </p>
  <p> {props.name}-{props.age}</p>
  <p>{props.children}</p>
    <input onChange={props.changed} value={props.name}/>
  </div>;
};

export default person;
