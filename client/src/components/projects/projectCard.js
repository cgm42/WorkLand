import React from "react";
import Button from "../button/Button";
import ProjectUser from "../users/ProjectUser";
import { useSelector } from "react-redux";

export default function ProjectCard(props) {
  const userState = useSelector((state) => {
    console.log('state:', state);
    return state.user;
  });

  const {id, projectTeams, users} = props;

  const team = projectTeams.filter(team => {
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

  const usersListArray = usersList.map(user => {
    const {id, name, avatar} = user;
      return (
        <ProjectUser
          key={id}
          id={id}
          avatar={avatar}
          name={name}
        />
      )
  });

  return (
    <div className='project-card rpgui-container framed float'>
      <header className=' framed'>{props.name}</header>
      <p>Description:</p>
      <p>{props.description}</p>
      <p>Tasks completed:</p>
      <p>9/10</p>
      <p>The team:</p>
      {usersListArray}
      {userState.id === props.creatorID && <Button>Edit</Button>}
    </div>
  );
};