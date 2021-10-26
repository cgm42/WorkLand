import React from "react";
import classNames from "classnames";

export default function ProjectUser(props) {
  const {id, avatar, name} = props;

  const userClass = classNames(
    "user-list"
  )

  return (
    <li className={userClass} id={id}>
      <img src={avatar}/>
      <p>{name}</p>
    </li>
  );
};