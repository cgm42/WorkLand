import ProjectUser from "../components/users/ProjectUser";

const getProjectTeamsForCard = (state, id) => {
  const team = state.projectTeams.filter((team) => {
    return team.projectId === id;
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

    return <ProjectUser key={id} id={id} avatar={avatar} name={name} />;
  });

  return usersListArray;
};

export default getProjectTeamsForCard;
