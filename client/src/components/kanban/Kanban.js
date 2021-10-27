import React, { useState } from "react";
import "./kanban.css";
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import { AiFillWarning } from "react-icons/ai";
import KanbanCard from "./KanbanCard";
import { DragDropContext } from "react-beautiful-dnd";

function Kanban() {
  // const [tas, updateTasks] = useState(tasksList);

  const handleOnDragEnd = (result) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="rpgui-content rpgui-container framed-golden-2">
        <div className="welcome">
          <h1>Welcome to your Kanban</h1>
        </div>

        <section className="kanban-layout">
          <KanbanCard name={"Late"} status={3}></KanbanCard>
          <KanbanCard name={"Todo"} status={0}></KanbanCard>
          <KanbanCard name={"In Progress"} status={1}></KanbanCard>
          <KanbanCard name={"Done"} status={2}></KanbanCard>
        </section>
      </div>
    </DragDropContext>
  );
}

export default Kanban;
