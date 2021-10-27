import React, { useState, useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import "./kanban.css";
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import classNames from "classnames";
import { AiFillWarning } from "react-icons/ai";
import KanbanTaskItem from "./KanbanTaskItem";
import { Droppable } from "react-beautiful-dnd";

function KanbanCard(props) {
  const { name, status } = props;
  const { state } = useContext(stateContext);

  const kanBanCardClass = classNames(
    "kanban-card",
    "nes-container", "is-rounded",
    "float",
    { "is-late": status === 3 },
    { "to-do": status === 0 },
    { "in-progress": status === 1 },
    { "is-done": status === 2 }
  );

  const tasksList = state.tasks.map((task, index) => {
    const { id, name, description, priorityLevel, currentStatus } = task;
    if (status === currentStatus) {
      return (
        <KanbanTaskItem
          key={id}
          index={index}
          id={id}
          title={name}
          description={description}
          priority={priorityLevel}
          currentStatus={currentStatus}
          users={state.users}
          taskTeams={state.taskTeams}
        ></KanbanTaskItem>
      );
    }
  });

  const [tasks, updateTasks] = useState(tasksList);

  const handleOnDragEnd = (result) => {
    console.log(result);
  };

  return (

    <Droppable droppableId="kanban-card">
      {(provided) => (
        <div
          className={kanBanCardClass}
          {...provided.droppableProps}
          ref={provided.innerRef}
          id='kanban-card-id'
        >
          <header className="title" >{name}</header>
          {tasksList}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default KanbanCard;
