export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT";

export default function applicationDataReducer(state, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
};

const setApplicationData = (state, action) => ({
  ...state,
  users: action.value.users,
  projects: action.value.projects,
  projectTeams: action.value.projectTeams,
  tasks: action.value.tasks,
  taskTeams: action.value.taskTeams
});

const setCurrentProject = (state, action) => ({
  ...state,
  current_project: action.id
});

const reducers = {
  SET_APPLICATION_DATA: setApplicationData,
  SET_CURRENT_PROJECT: setCurrentProject
}