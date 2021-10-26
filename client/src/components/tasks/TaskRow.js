import React from "react";
import { IoMdWarning } from 'react-icons/io';
import './tasks.css'
import "../rpgui.css";
import "nes.css/css/nes.min.css";

export default function TaskRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.user}</td>
      <td>{props.status}</td>
      <td className='priority'><IoMdWarning className='icon'/></td>
      <td>{props.startDate}</td>
      <td>{props.endDate}</td>
    </tr>
  )
};