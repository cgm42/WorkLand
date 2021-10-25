import React, {useState, useEffect} from 'react';
import './projects.css';
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import ProjectCard from './projectCard';
import Form from './Form';
import Button from '../button/Button';
import axios from "axios";
import useApplicationData from '../../hooks/useApplicationData';

function ProjectCardList(props) {
  const { state, createProject } = useApplicationData();
  const [showForm, setShowForm] = useState(false);

  // console.log
  

  const projectsList = state.projects.map(project => {
    return (
      <ProjectCard
        key={project.id}
        name={project.name}
        description={project.description}
      />
    )
  });


  return (
    <div className='rpgui-content rpgui-container framed-golden-2'>
      <div className='welcome'>
        <h1>Project Dashboard</h1>
      </div>

      <section>
        {projectsList}
        <div className='new-project'>
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
        </div>
      </section>
    </div>
  );
};

export default ProjectCardList;