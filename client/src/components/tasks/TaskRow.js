import React from "react";

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