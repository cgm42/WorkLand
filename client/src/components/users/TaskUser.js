import React from "react";
import classNames from "classnames";

export default function TaskUser(props) {
  const {id, avatar} = props;

  const userClass = classNames(
    "user-list"
  )

  return (
    <li className={userClass} id={id}>
      <img src={avatar}/>
    </li>
  );
};