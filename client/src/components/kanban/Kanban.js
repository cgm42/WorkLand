import React, { useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import "./kanban.css";
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import { AiFillWarning } from "react-icons/ai";
import KanbanCard from "./KanbanCard";

function Kanban() {
  const { state } = useContext(stateContext);

  return (
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
  );
}

export default Kanban;
