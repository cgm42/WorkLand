import React, { useState } from "react";
import Button from "../button/Button";
import DatePicker from "react-date-picker";
import { BiEdit } from "react-icons/bi";
import getProjectTeams from "../../helpers/getProjectTeams";
import getTaskTeams from "../../helpers/getTaskTeams";

function EditTaskForm(props) {
  const [name, setName] = useState(props.name || "");
  const [description, setDescription] = useState(props.description || "");
  const [startDate, onStart] = useState(
    new Date(props.startDate) || new Date()
  );
  const [endDate, onEnd] = useState(new Date(props.endDate) || new Date());
  const [error, setError] = useState("");

  const { id, state, onSave } = props;

  const taskUsersListArray = getTaskTeams(state, id);
  const projectUsersListArray = getProjectTeams(state, taskUsersListArray);

  const validate = () => {
    const userIDs = projectUsersListArray.map((user) => user.props.id);

    const selectedUsers = document
      .getElementById(makeId(id))
      .getElementsByClassName("user-list--selected");

    const selectedUsersIDs = [];

    for (const user of selectedUsers) {
      selectedUsersIDs.push(parseInt(user.id));
    }

    const task = {
      name,
      description,
      startDate,
      endDate,
      users: userIDs,
      selectedUsers: selectedUsersIDs,
    };

    setError("");
    onSave(task, id);
    document.getElementById(makeId(id)).close();
  };

  const cancel = () => {
    document.getElementById(makeId(id)).close();
  };

  const makeId = (id) => {
    return `dialog-dark-rounded-edit-${id}`;
  };

  return (
    <div>
      <div>
        <BiEdit
          className="edit-icon"
          onClick={() => document.getElementById(makeId(id)).showModal()}
        ></BiEdit>
      </div>
      <dialog className="nes-dialog is-dark is-rounded" id={makeId(id)}>
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
              <ul className="rpgui users-container">{projectUsersListArray}</ul>
            </label>

            <div className="date">
              <label>
                Start date:
                <DatePicker
                  onChange={onStart}
                  value={startDate}
                  className="date-size"
                />
              </label>

              <label>
                End date:
                <DatePicker
                  onChange={onEnd}
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

export default EditTaskForm;
