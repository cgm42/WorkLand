import React from "react";
import classNames from "classnames";

export default function User(props) {
  const {id, avatar, name, selected} = props;

  const userClass = classNames(
    "user-list",
    {"user-list--selected": selected }
  )

  return (
    <li className={userClass} id={id}>
      <img src={avatar}/>
      <p>{name}</p>
    </li>
  );
}