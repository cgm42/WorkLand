import React, {useState, useEffect} from 'react';
import './projects.css';
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import ProjectCard from './projectCard';
import Form from './Form';
import Button from '../button/Button';
import User from '../users/User';
import useApplicationData from '../../hooks/useApplicationData';


function ProjectCardList(props) {
  const { state, createProject } = useApplicationData();
  const [showForm, setShowForm] = useState(false);

  const projectsList = state.projects.map(project => {
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        name={project.name}
        description={project.description}
      />
    )
  });

  const usersList = state.users.map(user => {
    console.log("in usersList:", user.name);
    const {id, name, avatar} = user;
    return (
      <User 
        key={id}
        id={id}
        avatar={avatar}
        name={name}
      />
    )
  })


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
            usersList={usersList}
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