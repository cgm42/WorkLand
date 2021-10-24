import React from "react";
import UserInfoList from "./UserInfoList";

const UserInfoCard = (props) => {
  const { heading } = props;
  return (
    <div className="project-card float">
      <header>{heading}</header>
      <div className="description">
        <ul>
          <UserInfoList></UserInfoList>
        </ul>
      </div>
    </div>
  );
};

export default UserInfoCard;
