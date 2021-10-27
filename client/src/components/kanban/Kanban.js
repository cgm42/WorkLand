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
  const initialData = {
    columns: {
      "column-1": {
        id: "column-1",
        title: "Late",
        taskIds: [],
      },
      "column-2": {
        id: "column-2",
        title: "To-Do",
        taskIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "In Progress",
        taskIds: [],
      },
      "column-4": {
        id: "column-4",
        title: "Done",
        taskIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3", "column-4"],
  };

  const [kanbanState, setKanbanState] = useState(initialData);

  console.log("first", kanbanState);

  useEffect(() => {
    if (state.tasks.length) {
      state.tasks.forEach((task) => {
        if (task.currentStatus === 3) {
          initialData.columns["column-1"].taskIds.push(task.id);
        } else if (task.currentStatus === 0) {
          initialData.columns["column-2"].taskIds.push(task.id);
        } else if (task.currentStatus === 1) {
          initialData.columns["column-3"].taskIds.push(task.id);
        } else if (task.currentStatus === 2) {
          initialData.columns["column-4"].taskIds.push(task.id);
        }
        // initialData.tasks[task.id] = task;
      });
      setKanbanState((prev) => ({ ...prev, ...initialData }));
      console.log("second", kanbanState);
    } else {
      setKanbanState((prev) => ({ ...prev, ...initialData }));
    }
  }, []);

  const handleOnDragEnd = async (result) => {
    console.log(result);
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

    const start = kanbanState.columns[source.droppableId];
    const end = kanbanState.columns[destination.droppableId];

    if (start === end) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...kanbanState,
        columns: {
          ...kanbanState.columns,
          [newColumn.id]: newColumn,
        },
      };

      setKanbanState(newState);
      console.log("third", kanbanState);
      return;
    }

    const startingTaskIds = Array.from(start.taskIds);
    const currentTask = startingTaskIds[source.index];
    startingTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startingTaskIds,
    };

    const dropColumnTaskIds = Array.from(end.taskIds);
    dropColumnTaskIds.splice(destination.index, 0, draggableId);
    const updateDropColumn = {
      ...end,
      taskIds: dropColumnTaskIds,
    };

    const newState = {
      ...kanbanState,
      columns: {
        ...kanbanState.columns,
        [newStart.id]: newStart,
        [updateDropColumn.id]: updateDropColumn,
      },
    };

    const getStatusFromColumn = (column) => {
      if (column === "column-1") return 3;
      if (column === "column-2") return 0;
      if (column === "column-3") return 1;
      if (column === "column-4") return 2;
    };

    const status = getStatusFromColumn(destination.droppableId);

    await updateTaskStatus(status, currentTask);

    setKanbanState((prev) => ({ ...prev, ...newState }));
    console.log("fourth", kanbanState);
  };

  return (
    <div className="rpgui-content rpgui-container framed-golden-2">
      <div className="welcome">
        <h1>Welcome to your Kanban</h1>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <section className="kanban-layout">
          <KanbanCard name={"Late"} status={3} column={"column-1"}></KanbanCard>
          <KanbanCard name={"Todo"} status={0} column={"column-2"}></KanbanCard>
          <KanbanCard
            name={"In Progress"}
            status={1}
            column={"column-3"}
          ></KanbanCard>
          <KanbanCard name={"Done"} status={2} column={"column-4"}></KanbanCard>
        </section>
      </DragDropContext>
    </div>
  );
}

export default Kanban;
