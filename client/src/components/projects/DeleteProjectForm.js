import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "../button/Button";

function DeleteProjectForm(props) {
  const { id, onConfirm } = props;

  const confirm = () => {
    onConfirm(id);
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
      <div className="delete-button">
        <RiDeleteBinLine
          onClick={() => document.getElementById(makeId(id)).showModal()}
        ></RiDeleteBinLine>
      </div>
      <dialog className="nes-dialog is-dark is-rounded" id={makeId(id)}>
        <form
          className="form"
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
          method="dialog"
        >
          <h1 className="warning">
            Are you sure you want to delete this project?
          </h1>
          <div className="cancel-submit">
            <Button onClick={cancel} title={"Cancel"}></Button>
            <Button onClick={confirm} title={"Confirm"}></Button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

export default DeleteProjectForm;
