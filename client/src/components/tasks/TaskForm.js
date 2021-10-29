import React, { useState } from "react";
import Button from "../button/Button";
import DatePicker from "react-date-picker";
import getProjectTeams from "../../helpers/getProjectTeams";

function TaskForm(props) {
  const [name, setName] = useState(props.name || "");
  const [description, setDescription] = useState(props.description || "");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [priority, setPriority] = useState(0);
  const [error, setError] = useState("");

  const { state, onSave, projectID, setEdit } = props;

  const usersListArray = getProjectTeams(state);
  console.log(usersListArray);

  const validate = () => {
    const selectedUsers = document
      .getElementById("dialog-dark-rounded")
      .getElementsByClassName("user-list--selected");

    const selectedUsersIDs = [];

    for (const user of selectedUsers) {
      selectedUsersIDs.push(user.id);
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
    setError("");
    onSave(task);
    document.getElementById("dialog-dark-rounded").close();
  };

  const cancel = () => {
    document.getElementById("dialog-dark-rounded").close();
  };

  // const makeId = (id) => {
  //   return `dialog-dark-rounded-edit-${id}`;
  // };

  return (
    <div>
      <Button
        type="button"
        className="nes-btn is-primary"
        onClick={() =>
          document.getElementById("dialog-dark-rounded").showModal()
        }
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
            <label>
              Assignees:
              <ul className="rpgui users-container">{usersListArray}</ul>
            </label>

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
