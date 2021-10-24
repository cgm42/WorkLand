import React from "react";

export default function ProjectCard(props) {
  return (
    <div className='project-card rpgui-container framed float'>
      <header>{props.name}</header>
      <p>{props.description}</p>
      <p>Task completion:</p>
      <p>The team:</p>
    </div>
  );
};