import React, { useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import { Chart } from "react-google-charts";
import "./GanttChart.css";

function GanttChart() {
  const { state } = useContext(stateContext);

  const tasks = state.tasks.map((task) => {
    const status = task.status === 2 ? 100 : 0;

    return [
      task.name,
      task.name,
      "Task",
      new Date(task.startDate),
      new Date(task.endDate),
      null,
      status,
      null,
    ];
  });
  console.log("tasks", ...tasks);

  return (
    <div className="rpgui-content nes-container is-rounded is-dark">
      <div className="welcome">
        <h1>Gantt Chart</h1>
      </div>
      <Chart
        className="gantt-container"
        chartType="Gantt"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "string", label: "Task ID" },
            { type: "string", label: "Task Name" },
            { type: "string", label: "Type" },
            { type: "date", label: "Start Date" },
            { type: "date", label: "End Date" },
            { type: "number", label: "Duration" },
            { type: "number", label: "status" },
            { type: "string", label: "Dependencies" },
          ],
          ...tasks,
        ]}
        options={{
          height: 600,
          gantt: {
            trackHeight: 46,
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default GanttChart;
