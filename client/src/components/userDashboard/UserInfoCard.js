import React from "react";
import UserInfoCardData from "./UserInfoCardData";

function UserInfoCard(props) {
  const { heading, projects, meetings } = props;
  const getTodaysDate = () => {
    let date = new Date;
    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset*60*1000))
    return date.toISOString().split('T')[0]
  }

  const getMeetingsDate = meeting => {
    const date = meeting.date.split('T');
    return date[0];
  }
  
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
            <UserInfoCardData
              key={project.id}
              name={project.name}
            />
          )
        })}
        {meetings && meetings.map(meeting => {
          if (getMeetingsDate(meeting) === getTodaysDate())
           return (
            <UserInfoCardData
              key={meeting.id}
              name={meeting.name}
              startTime={meeting.startTime}
            />
          )
        })}
      </ul>
    </div>
  );
};

export default UserInfoCard;
