import React, {useState, useEffect} from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';
import axios from "axios";

function ProjectCardList(props) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get("/projects")
      .then(projects => {
        setProjects(projects.data);
      });
  }, []);

  const projectsList = projects.map(project => {
    return (
      <ProjectCard
        key={project.id}
        name={project.name}
        description={project.description}
      />
    )
  });


  return (
    <div className='dashboard-layout'>
      <div className='welcome'>
        <h1>Projects</h1>
      </div>

      <section className='rpgui-content'>
        {projectsList}
      </section>
    </div>
  );
};

export default ProjectCardList;