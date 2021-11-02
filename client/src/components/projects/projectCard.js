import React, { useContext, useState, useEffect } from "react";
import { stateContext } from "../providers/StateProvider";
import { useSelector } from "react-redux";
import getProjectTeamsForCard from "../../helpers/getProjectTeamsForCard";
import EditProjectForm from "./EditProjectForm";
import DeleteProjectForm from "./DeleteProjectForm";
import axios from "axios";
import classNames from "classnames";

export default function ProjectCard(props) {
  const userState = useSelector((state) => {
    // console.log("state:", state);
    return state.user;
  });

  const [tasks, setTasks] = useState([]);
  const { state, editProject, deleteProject } = useContext(stateContext);
  const {
    id,
    name,
    description,
    startDate,
    endDate,
    selected,
    setCurrentProject,
  } = props;

  const projectClass = classNames("project-card", "nes-container", "is-rounded", {
    "project-card--selected": selected,
  });

  useEffect(async () => {
    const { data } = await axios.get(`/tasks/project/${id}`);
    setTasks(data);
  }, []);

  const completedTasks = tasks.filter((task) => task.currentStatus === 2);
  const percentComplete = Math.round(
    (completedTasks.length / tasks.length) * 100
  );

  const zeroPercentErrorHandler = (percent) => (percent ? percent : 0);

  const usersListArray = getProjectTeamsForCard(state, id);

  return (
    <div className={projectClass} onClick={() => setCurrentProject(id)}>
      <div className="card-header">
        <header className="title">{props.name}</header>
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
            <DeleteProjectForm id={id} onConfirm={deleteProject} />
          </div>
        )}
      </div>
      <p className='project-card-description'>{props.description}</p>
      <h1>Completion: {zeroPercentErrorHandler(percentComplete)}%</h1>
      <progress
        className="nes-progress is-success"
        value={zeroPercentErrorHandler(percentComplete)}
        max="100"
      ></progress>
      <h1>The team:</h1>
      {usersListArray}
    </div>
  );
}
