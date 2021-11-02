import React from "react";
import classNames from "classnames";
import "./Button.css";

function Button(props) {
  const buttonClass = classNames(
    'nes-btn',
    'is-primary',
    "new-size"
  )

  return (
    <button onClick={props.onClick} className={buttonClass}>{props.title}</button>
  )
}

export default Button;