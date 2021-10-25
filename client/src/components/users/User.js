import React from "react";

export default function User(props) {
  const {id, avatar, name} = props;
  return (
    <li id={id}>
      <img src={avatar}/>
      <p>{name}</p>
    </li>
  );
}