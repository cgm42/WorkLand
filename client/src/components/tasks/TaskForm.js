import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import DatePicker from "react-date-picker";
import User from "../users/User";

function TaskForm(props) {
  const [name, setName] = useState(props.name || "");
  const [description, setDescription] = useState(props.description || "");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [priority, setPriority] = useState(0);
  const [showUsers, setShowUsers] = useState(false);
  const [error, setError] = useState("");

  const { state, onSave, projectID, setEdit } = props;

  const team = state.projectTeams.filter((team) => {
    return team.projectId === state.current_project;
  });

  const projectUsersList = [];

  for (const member of team) {
    for (const user of state.users) {
      if (user.id === member.userId) {
        projectUsersList.push(user);
      }
    }
  }

  const validate = () => {
    const selectedUsers = document
      .getElementById("dialog-dark-rounded")
      .getElementsByClassName("user-list--selected");

    const selectedUsersIDs = [];

    for (const user of selectedUsers) {
      selectedUsersIDs.push(parseInt(user.id));
    }

    const task = {
      project_id: projectID,
      sprint_id: null,
      name,
      description,
      startDate,
      endDate,
      priority_level: priority,
      users: selectedUsersIDs,
    };

    setName("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date());
    setShowUsers(false);
    setError("");
    onSave(task);
    document.getElementById("dialog-dark-rounded").close();
  };

  const cancel = () => {
    setName("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date());
    setShowUsers(false);
    setError("");
    document.getElementById("dialog-dark-rounded").close();
  };

  return (
    <div>
      <Button
        type="button"
        className="nes-btn is-primary"
        onClick={() => {
          setShowUsers(true);
          document.getElementById("dialog-dark-rounded").showModal();
        }}
        title={"New Task"}
      ></Button>
      <dialog
        className="nes-dialog is-dark is-rounded"
        id="dialog-dark-rounded"
      >
        <form
          className="form"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
          method="dialog"
        >
          <label>
            Task name:
            <input
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
            />
          </label>

          <label>
            Description:
            <textarea
              value={description}
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
                setError("");
              }}
            />
          </label>

          <div className="team-date-container">
            {showUsers && (
              <label>
                Assignees:
                <ul className="rpgui users-container">
                  {projectUsersList.map((user) => {
                    const { id, name, avatar } = user;

                    return (
                      <User key={id} id={id} avatar={avatar} name={name} />
                    );
                  })}
                </ul>
              </label>
            )}

            <label>
              Priority:
              <select
                className="rpgui-dropdown"
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value={0}>Low</option>
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </label>

            <div className="date">
              <label>
                Start date:
                <DatePicker
                  onChange={setStartDate}
                  value={startDate}
                  className="date-size"
                />
              </label>

              <label>
                End date:
                <DatePicker
                  onChange={setStartDate}
                  value={endDate}
                  className="date-size"
                />
              </label>
            </div>
          </div>
          <div className="cancel-submit">
            <Button onClick={cancel} title={"cancel"}></Button>
            <Button onClick={validate} title={"submit"}></Button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default TaskForm;
