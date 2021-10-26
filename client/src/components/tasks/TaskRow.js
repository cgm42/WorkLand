import React from "react";
import { IoMdWarning } from 'react-icons/io';
import './tasks.css'
import "../rpgui.css";
import "nes.css/css/nes.min.css";
import classNames from "classnames";

export default function TaskRow(props) {

  const priorityClass = classNames(
    'priority',
    {'low': props.priority === 0},
    {'medium': props.priority === 1},
    {'high': props.priority === 2}
  );

  const statusClass = classNames(
    {'to-do': props.status === 0},
    {'in-progress': props.status === 1},
    {'complete': props.status === 2},
    {'late': props.status === 3}
  )

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.user}</td>
      <td className={statusClass}>{props.status}</td>
      <td className={priorityClass}><IoMdWarning className='icon'/></td>
      <td>{props.startDate}</td>
      <td>{props.endDate}</td>
    </tr>
  )
};