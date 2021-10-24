import React from "react";
import UserInfoCardList from "./UserInfoCardList";

const UserInfoCard = (props) => {
  const { heading, projects } = props;
  const projectsList = projects.map(project => {
    return (
      <UserInfoCardList
        key={project.id}
        name={project.name}
      />
    )
  })

  return (
    <div className="card rpgui-container framed float">
      <header>{heading}</header>
      <ul>
        {projectsList}
      </ul>
    </div>
  );
};

export default UserInfoCard;
