import User from "../components/users/User";
import getTaskTeams from "./getTaskTeams";

const getProjectTeams = (state, taskTeam = []) => {
  const team = state.projectTeams.filter((team) => {
    return team.projectId === state.current_project;
  });

  const projectUsersList = [];

  for (const member of team) {
    for (const user of state.users) {
      if (user.id === member.userId) {
        projectUsersList.push(user);
      }
    }
  }

  const usersListArray = projectUsersList.map((user) => {
    const { id, name, avatar } = user;
    const selectedUser = taskTeam.filter(
      (taskUser) => taskUser.props.id === id
    );
    const selected = selectedUser.length > 0;

    return (
      <User key={id} id={id} avatar={avatar} name={name} selected={selected} />
    );
  });

  return usersListArray;
};

export default getProjectTeams;
