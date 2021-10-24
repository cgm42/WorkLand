import React from "react";
import UserInfoCardList from "./UserInfoCardList";

const UserInfoCard = (props) => {
  const { heading, projects, meetings } = props;
  
  // const projectsList = projects.map(project => {
  //   return (
  //     <UserInfoCardList
  //       key={project.id}
  //       name={project.name}
  //     />
  //   )
  // });

  // const meetingsList = meetings.map(meeting => {

  // })

  return (
    <div className="card rpgui-container framed float">
      <header>{heading}</header>
      <ul>
        {projects && projects.map(project => {
           return (
            <UserInfoCardList
              key={project.id}
              name={project.name}
            />
          )
        })}
        {meetings && meetings.map(meeting => {
          console.log(meeting.meeting);
          console.log(Date.now())
          if (meeting.date === Date.now())
           return (
            <UserInfoCardList
              key={meeting.id}
              name={meeting.name}
            />
          )
        })}
      </ul>
    </div>
  );
};

export default UserInfoCard;
