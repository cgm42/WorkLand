import React from "react";
import { IoMdWarning } from 'react-icons/io';
import './tasks.css'
import "../rpgui.css";
import "nes.css/css/nes.min.css";
import classNames from "classnames";
import TaskUser from "../users/TaskUser";

export default function TaskRow(props) {
  const {id, name, status, priority, startDate, endDate, users, taskTeams} = props;

  const team = taskTeams.filter((team) => {
    return team.taskId === id;
  });

  const usersList = [];

  for (const member of team) {
    for (const user of users) {
      if (user.id === member.userId) {
        usersList.push(user);
      }
    }
  }

  const usersListArray = usersList.map((user) => {
    const { id, name, avatar } = user;
    return <TaskUser key={id} id={id} avatar={avatar} name={name} />;
  });

  const priorityClass = classNames(
    "priority",
    { "late": priority === 0 },
    { "progress": priority === 1 },
    { "done": priority === 2 }
  );

  const statusClass = classNames(
    {'to-do': props.status === 0},
    {'in-progress': props.status === 1},
    {'complete': props.status === 2},
    {'late': props.status === 3}
  )

  return (
    <tr>
      <td>{name}</td>
      <td className="task-user-container">{usersListArray}</td>
      <td className={statusClass}>{status}</td>
      <td className={priorityClass}><IoMdWarning className='icon'/></td>
      <td>{startDate}</td>
      <td>{endDate}</td>
    </tr>
  )
};