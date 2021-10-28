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
  const { name, status, column, tasks } = props;
  const { state } = useContext(stateContext);

  const kanBanCardClass = classNames(
    "kanban-card",
    "nes-container",
    "is-rounded",
    { "is-late": status === 3 },
    { "to-do": status === 0 },
    { "in-progress": status === 1 },
    { "is-done": status === 2 }
  );

  const tasksList = tasks.map((task) => {
    const { id, name, description, priorityLevel, currentStatus, columnIndex } =
      task;

    return (
      <KanbanTaskItem
        key={id}
        index={columnIndex}
        id={id}
        title={name}
        description={description}
        priority={priorityLevel}
        currentStatus={currentStatus}
        users={state.users}
        taskTeams={state.taskTeams}
      ></KanbanTaskItem>
    );
  });

  return (
    <Droppable droppableId={column}>
      {(provided) => (
        <div
          className={kanBanCardClass}
          {...provided.droppableProps}
          ref={provided.innerRef}
          id="kanban-card-id"
        >
          <header className="title">{name}</header>
          {tasksList}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default KanbanCard;
