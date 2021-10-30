import React, { useState, useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import "./tasks.css";
import "../rpgui.css";
import "nes.css/css/nes.min.css";
import TaskRow from "./TaskRow";
import TaskForm from "./TaskForm";
import Button from "../button/Button";

function TaskTable(props) {
  const { state, createTask } = useContext(stateContext);

  console.log("----tasks in task table-----", state.tasks);

  return (
    <div className="rpgui-content">
      <div className="dashboard-layout rpgui-container framed-golden-2">
        <div className="welcome">
          <h1>Tasks</h1>
        </div>

        <div className="rpgui-container framed ">
          <div className="table-container">
            <TaskForm
              onSave={createTask}
              state={state}
              projectID={state.current_project}
            />
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Tasks</th>
                <th>Users</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>
            {state.tasks && (
              <tbody>
                {state.tasks.map((task) => {
                  return (
                    <TaskRow
                      key={task.id}
                      id={task.id}
                      name={task.name}
                      description={task.description}
                      status={task.currentStatus}
                      priority={task.priorityLevel}
                      startDate={task.startDate}
                      endDate={task.endDate}
                    ></TaskRow>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskTable;
