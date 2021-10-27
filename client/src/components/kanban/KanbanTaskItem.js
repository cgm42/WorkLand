import React from "react";
import { AiFillWarning } from "react-icons/ai";

function KanbanTaskItem() {
  return (
    <ul className="task-item-container">
      <li>
        <div className="task-item-header">
          <h1>title</h1>
          <div className="priority-icon">
            <AiFillWarning></AiFillWarning>
          </div>
        </div>

        <p>description</p>
        <div className="task-users">
          <AiFillWarning></AiFillWarning>
          <AiFillWarning></AiFillWarning>
          <AiFillWarning></AiFillWarning>
        </div>
      </li>
    </ul>
  );
}

export default KanbanTaskItem;
