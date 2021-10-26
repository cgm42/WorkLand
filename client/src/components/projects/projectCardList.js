import React, {useState, useEffect} from 'react';
import './projects.css';
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import ProjectCard from './projectCard';
import Form from './Form';
import Button from '../button/Button';
import useApplicationData from '../../hooks/useApplicationData';


function ProjectCardList(props) {
  const { state, createProject } = useApplicationData();
  const [showForm, setShowForm] = useState(false);

  const projectsList = state.projects.map(project => {
    console.log(project);
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        creatorID={project.creatorId}
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
            usersList={state.users}
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