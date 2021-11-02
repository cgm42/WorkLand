import React, { useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import { IoMdWarning } from "react-icons/io";
import "./tasks.css";
import "../rpgui.css";
import "nes.css/css/nes.min.css";
import classNames from "classnames";
import EditTaskForm from "./EditTaskForm";
import getTaskTeams from "../../helpers/getTaskTeams";
import DeleteTaskForm from "./DeleteTaskForm";
import TaskItemInfo from './TaskItemInfo';

export default function TaskRow(props) {
  const { state, editTask, updateTaskStatus, updateTaskPriority, deleteTask } =
    useContext(stateContext);

  const formatDate = (date) => {
    return date.split("T")[0];
  };

  const { id, name, description, status, priority, startDate, endDate } = props;

  const taskUsersListArray = getTaskTeams(state, id);

  const priorityClass = classNames(
    "priority",
    { low: priority === 0 },
    { medium: priority === 1 },
    { high: priority === 2 }
  );

  const statusClass = classNames(
    "status",
    { "to-do": props.status === 0 },
    { "progress-status": props.status === 1 },
    { "is-done": props.status === 2 },
    { "is-late": props.status === 3 }
  );

  const statusToText = (status) => {
    if (status === 0) return "Todo";
    if (status === 1) return "In Progress";
    if (status === 2) return "Done";
    if (status === 3) return "Late";
  };

  const toggleStatus = (status) => {
    if (status === 0) return 1;
    if (status === 1) return 2;
    if (status === 2) return 3;
    if (status === 3) return 0;
  };

  const togglePriority = (priority) => {
    if (priority === 0) return 1;
    if (priority === 1) return 2;
    if (priority === 2) return 0;
  };

  const newStatus = toggleStatus(status);
  const newPriority = togglePriority(priority);

  return (
    <tr>
      <td>
        <div className="name-icons">
          {name}
          {state.current_project !== 1 && (
            <div className="edit-delete">
              <EditTaskForm
                state={state}
                id={id}
                name={name}
                description={description}
                priority={priority}
                startDate={startDate}
                endDate={endDate}
                onSave={editTask}
              />
              <DeleteTaskForm
                id={id}
                onConfirm={deleteTask}
                className="delete-icon"
              ></DeleteTaskForm>
            </div>
          )}
        </div>
      </td>
      {taskUsersListArray.length <= 4 ? <td className="task-user-container">{taskUsersListArray}</td> : <td><TaskItemInfo id={id} users={taskUsersListArray}></TaskItemInfo></td>}
      <td
        className={statusClass}
        onClick={() => updateTaskStatus(newStatus, id)}
      >
        {statusToText(status)}
      </td>
      <td
        className={priorityClass}
        onClick={() => updateTaskPriority(newPriority, id)}
      >
        <IoMdWarning className="icon" />
      </td>
      <td>{formatDate(startDate)}</td>
      <td>{formatDate(endDate)}</td>
    </tr>
  );
}
