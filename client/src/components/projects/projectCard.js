import {React, useState} from 'react';
import Button from '../button/Button';
import ProjectUser from '../users/ProjectUser';
import { useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';

export default function ProjectCard(props) {
  const userState = useSelector((state) => {
    console.log('state:', state);
    return state.user;
  });

  const [edit, setEdit] = useState(false);

  const {id, projectTeams, users, setShowForm, editProject} = props;

  const team = projectTeams.filter((team) => {
    return team.projectId === id;
  });

  const usersList = [];

  for (const member of team) {
    for (const user of users) {
      if (user.id === member.userId) {
        usersList.push(user);
      }
    }
  }

  const usersListArray = usersList.map((user) => {
    const { id, name, avatar } = user;
    return <ProjectUser key={id} id={id} avatar={avatar} name={name} />;
  });

  return (
    <div className='project-card rpgui-container framed float'>
      <div className='card-header'>
        <header>{props.name}</header>
        {userState.id === props.creatorID && <div className='edit-button' onClick={() => {
        setShowForm(true)
        setEdit(true);
        }}>
          <BiEdit ></BiEdit>
        </div>}
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
