import React, { useContext } from "react";
import { stateContext } from "../providers/StateProvider";
import getProjectTeams from "../../helpers/getProjectTeams";

export default function ProjectCard(props) {
  const { state } = useContext(stateContext);

  // const userState = useSelector((state) => {
  //   console.log('state:', state);
  //   return state.user;
  // });

  const {
    id,
    projectTeams,
    users,
    setCurrentProject,
    setShowForm,
    editProject,
  } = props;

  const usersListArray = getProjectTeams(state);

  return (
    <div
      className="project-card rpgui-container framed float"
      onClick={() => setCurrentProject(id)}
    >
      <div className="card-header">
        <header>{props.name}</header>
        {/* {userState.id === props.creatorID && <div className='edit-button' onClick={() => {
        setShowForm(true)
        setEdit(true);
        }}>
          <BiEdit ></BiEdit> */}
        {/* </div>} */}
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
