import User from "../components/users/User";

const getPreselectedProjectTeams = (state, projectId) => {
  const team = state.projectTeams.filter((team) => {
    return team.projectId === projectId;
  });

  const projectUsersList = [];

  for (const member of team) {
    for (const user of state.users) {
      if (user.id === member.userId) {
        projectUsersList.push(user);
      }
    }
  }

  const usersListArray = state.users.map((user) => {
    const { id, name, avatar } = user;
    const selectedUser = projectUsersList.filter(
      (projectUser) => projectUser.id === id
    );
    const selected = selectedUser.length > 0;

    return (
      <User key={id} id={id} avatar={avatar} name={name} selected={selected} />
    );
  });

  return usersListArray;
};

export default getPreselectedProjectTeams;
