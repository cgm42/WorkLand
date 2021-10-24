import react from "react";

export default function Button(props) {
  const buttonClass = classNames(
    'button',
    'rpgui-button golden'
  )

  return (
    <button onClick={props.onClick} className={buttonClass}>{props.children}</button>
  )
}