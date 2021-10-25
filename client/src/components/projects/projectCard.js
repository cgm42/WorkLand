import React from "react";

export default function ProjectCard(props) {
  return (
    <div className='project-card rpgui-container framed float '>
      <header className=' framed'>{props.name}</header>
      <p>{props.description}</p>
      <p>Task completion:</p>
      <p>The team:gfgd fsgd gkjsg bios udghi usg his ud hgis</p>
    </div>
  );
};