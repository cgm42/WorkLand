import React, { useState, useContext, useEffect } from "react";
import { stateContext } from "../providers/StateProvider";
import "./projects.css";
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import ProjectCard from "./projectCard";
import ProjectForm from "./ProjectForm";
import Button from "../button/Button";

function ProjectCardList(props) {
  const { state, createProject, setCurrentProject } = useContext(stateContext);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(state.current_project);
  }, [state.current_project]);

  // console.log(state.projectTeams);

  const projectsList = state.projects.map((project) => {
    const isSelected = selected === project.id;

    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        creatorID={project.creatorId}
        name={project.name}
        description={project.description}
        startDate={project.startDate}
        endDate={project.endDate}
        selected={isSelected}
        setCurrentProject={setCurrentProject}
      />
    );
  });

  return (
    <div className="rpgui-content rpgui-container framed">
      <div className="welcome">
        <h1>Project Dashboard</h1>
        <p>{state.tasks.length}</p>
      </div>
      <div className="new-project">
        <ProjectForm usersList={state.users} onSave={createProject} />
      </div>

      <section className="project-list">{projectsList}</section>
    </div>
  );
}

export default ProjectCardList;
