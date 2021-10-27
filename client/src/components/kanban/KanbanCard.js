import React, { useState, useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import "./kanban.css";
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import { AiFillWarning } from "react-icons/ai";
import KanbanTaskItem from "./KanbanTaskItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function KanbanCard(props) {
  const { name, status } = props;
  const { state } = useContext(stateContext);

  console.log(state.tasks);
  const tasksList = state.tasks.map((task) => {
    const { id, name, description, priorityLevel, currentStatus } = task;
    if (status === currentStatus) {
      return (
        <KanbanTaskItem
          key={id}
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

  return (
    <div className="kanban-card rpgui-container framed float">
      <header>{name}</header>
      {tasksList}
    </div>
  );
}

export default KanbanCard;
