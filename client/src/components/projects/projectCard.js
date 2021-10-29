import React, { useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import { useSelector } from "react-redux";
import getProjectTeamsForCard from "../../helpers/getProjectTeamsForCard";
import EditProjectForm from "./EditProjectForm";
import DeleteProjectForm from "./DeleteProjectForm";

export default function ProjectCard(props) {
  const userState = useSelector((state) => {
    console.log("state:", state);
    return state.user;
  });

  const { state, editProject } = useContext(stateContext);

  const { id, name, description, startDate, endDate, setCurrentProject } =
    props;

  const usersListArray = getProjectTeamsForCard(state, id);

  return (
    <div
      className="project-card rpgui-container framed float"
      onClick={() => setCurrentProject(id)}
    >
      <div className="card-header">
        <header>{props.name}</header>
        {userState.id === props.creatorID && (
          <div className="buttons">
            <EditProjectForm
              id={id}
              name={name}
              description={description}
              startDate={startDate}
              endDate={endDate}
              state={state}
              onSave={editProject}
            />
            <DeleteProjectForm></DeleteProjectForm>
          </div>
        )}
      </div>
      <h1>Description:</h1>
      <p>{props.description}</p>
      <h1>Tasks completed:</h1>
      <p>9/10</p>
      <h1>The team:</h1>
      {usersListArray}
    </div>
  );
}
