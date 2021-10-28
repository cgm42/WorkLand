import React, { useState, useContext, useEffect } from "react";
import { stateContext } from "../providers/StateProvider";
import "./kanban.css";
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import { AiFillWarning } from "react-icons/ai";
import KanbanCard from "./KanbanCard";
import { DragDropContext } from "react-beautiful-dnd";

function Kanban() {
  const { state, updateTaskStatus } = useContext(stateContext);

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = source.droppableId;
    const end = destination.droppableId;

    if (start === end) {
      return;
    }

    const getStatusFromColumn = (column) => {
      if (column === "column-1") return 3;
      if (column === "column-2") return 0;
      if (column === "column-3") return 1;
      if (column === "column-4") return 2;
    };

    const status = getStatusFromColumn(destination.droppableId);
    const currentTask = parseInt(draggableId);

    updateTaskStatus(status, currentTask);
  };

  return (
    <div className="rpgui-content rpgui-container framed-golden-2">
      <div className="welcome">
        <h1>Welcome to your Kanban</h1>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        {/* <DragDropContext> */}
        <section className="kanban-layout">
          <KanbanCard
            name={"Late"}
            status={3}
            column={"column-1"}
            tasks={state.tasks.filter((task) => task.currentStatus === 3)}
          ></KanbanCard>
          <KanbanCard
            name={"Todo"}
            status={0}
            column={"column-2"}
            tasks={state.tasks.filter((task) => task.currentStatus === 0)}
          ></KanbanCard>
          <KanbanCard
            name={"In Progress"}
            status={1}
            column={"column-3"}
            tasks={state.tasks.filter((task) => task.currentStatus === 1)}
          ></KanbanCard>
          <KanbanCard
            name={"Done"}
            status={2}
            column={"column-4"}
            tasks={state.tasks.filter((task) => task.currentStatus === 2)}
          ></KanbanCard>
        </section>
      </DragDropContext>
    </div>
  );
}

export default Kanban;
