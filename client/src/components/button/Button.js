import React from "react";
import classNames from "classnames";
import "./Button.css";

function Button(props) {
  const buttonClass = classNames(
    'button',
    'rpgui-button golden'
  )

  return (
    <button onClick={props.onClick} className={buttonClass}>{props.children}</button>
  )
}

export default Button;