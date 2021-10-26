import React from "react";
import { useSelector } from "react-redux";
import Button from "../button/Button";

export default function ProjectCard(props) {
  const userState = useSelector((state) => {
    console.log('state:', state);
    return state.user;
  });

  console.log(userState.id);
  console.log(props.creatorID);
  return (
    <div className='project-card rpgui-container framed float '>
      <header className=' framed'>{props.name}</header>
      <p>{props.description}</p>
      <p>Task completion:</p>
      <p>The team:gfgd fsgd gkjsg bios udghi usg his ud hgis</p>
      {userState.id === props.creatorID && <Button>Edit</Button>}
    </div>
  );
};