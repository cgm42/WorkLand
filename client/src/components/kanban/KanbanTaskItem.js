import React from "react";
import { AiFillWarning } from "react-icons/ai";
import TaskUser from "../users/TaskUser";

function KanbanTaskItem(props) {
  const {
    id,
    title,
    description,
    priorityLevel,
    currentStatus,
    users,
    taskTeams,
  } = props;

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

  return (
    <div className="task-item-container">
      <div className="task-item-header">
        <h1>{title}</h1>
        <div className="priority-icon">
          <AiFillWarning></AiFillWarning>
        </div>
      </div>

      <p>{description}</p>
      <div className="task-users">{usersListArray}</div>
    </div>
  );
}

export default KanbanTaskItem;
