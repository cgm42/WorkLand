import React, { useState } from "react";
import Button from "../button/Button";
import DatePicker from "react-date-picker";
import User from "../users/User";
import { BiEdit } from "react-icons/bi";

function EditProjectForm(props) {
  const [name, setName] = useState(props.name || "");
  const [description, setDescription] = useState(props.description || "");
  const [startDate, onStart] = useState(
    new Date(props.startDate) || new Date()
  );
  const [endDate, onEnd] = useState(new Date(props.endDate) || new Date());
  const [error, setError] = useState("");

  const { id, state, onSave } = props;

  // const team = state.projectTeams.filter((team) => {
  //   return team.projectId === projectID;
  // });

  // const usersList = [];

  // for (const member of team) {
  //   for (const user of state.users) {
  //     if (user.id === member.userId) {
  //       usersList.push(user);
  //     }
  //   }
  // }

  const usersListArray = state.users.map((user) => {
    const { id, name, avatar } = user;
    return <User key={id} id={id} avatar={avatar} name={name} />;
  });

  const validate = () => {
    const selectedUsers = document.getElementsByClassName(
      "user-list--selected"
    );

    const selectedUsersIDs = [];

    for (const user of selectedUsers) {
      selectedUsersIDs.push(user.id);
    }

    const project = {
      name,
      description,
      startDate,
      endDate,
      // users: selectedUsersIDs,
      // selectedUsers: selectedUsersIDs,
    };

    setError("");
    onSave(project, id);
    document.getElementById(makeId(id)).close();
  };

  const cancel = () => {
    document.getElementById(makeId(id)).close();
  };

  const makeId = (id) => {
    return `dialog-dark-rounded-edit-project-${id}`;
  };

  return (
    <div>
      <div>
        <BiEdit
          className="edit-button"
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
            Project name:
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
              Team:
              <ul className="rpgui users-container">{usersListArray}</ul>
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

export default EditProjectForm;
