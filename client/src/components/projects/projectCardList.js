import React, {useState, useEffect} from 'react';
import './projects.css';
import ProjectCard from './ProjectCard';
import Form from './Form';
import Button from '../button/Button';
import axios from "axios";

function ProjectCardList(props) {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    axios.get("/projects")
    .then(projects => {
      setProjects(projects.data);
    });
  }, []);
  
  const createProject = async (creatorID, projectName, description, startDate, endDate) => {
    await axios.post('/projects/', {creatorID, projectName, description, startDate, endDate})
  }

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
    <div className='rpgui-content'>
      <div className='welcome'>
        <h1>Projects</h1>
      </div>

      <section>
        {projectsList}
        {showForm ? 
          <Form 
            setShowForm={setShowForm}
            onSave={createProject}
          /> 
          :
          <Button 
            onClick={() => setShowForm(true)}
          >
            New Project
          </Button>}
      </section>
    </div>
  );
};

export default ProjectCardList;