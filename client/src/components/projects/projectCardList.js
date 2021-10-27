import React, {useState, useContext} from 'react';
import { stateContext } from '../providers/StateProvider';
import './projects.css';
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import ProjectCard from './projectCard';
import ProjectForm from './ProjectForm';
import Button from '../button/Button';


function ProjectCardList(props) {
  const { state, createProject, setCurrentProject} = useContext(stateContext);
  const [showForm, setShowForm] = useState(false);


  const projectsList = state.projects.map(project => {
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        creatorID={project.creatorId}
        name={project.name}
        description={project.description}
        projectTeams={state.projectTeams}
        users={state.users}
        setCurrentProject={setCurrentProject}
        // setShowForm={setShowForm}
        // editProject={editProject}
      />
    );
  });

  return (
    <div className='rpgui-content rpgui-container framed-golden-2'>
      <div className='welcome'>
        <h1>Project Dashboard</h1>
      </div>

      <section>
        {projectsList}
        <div className='new-project'>
        {showForm &&
          <ProjectForm 
            setShowForm={setShowForm}
            usersList={state.users}
            onSave={createProject}
          /> 
        }

          {/* {showForm && edit &&
          <Form 
          setShowForm={setShowForm}
          usersList={state.users}
          onSave={createProject}
          setEdit={setEdit}
        />}  */}

          {!showForm && (
            <Button onClick={() => setShowForm(true)}>New Project</Button>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProjectCardList;
