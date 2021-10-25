export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";

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
  projects: action.value.projects
});

const createProject = (state, action) => {
  const projects = [
    ...state.projects,
    action.value.project
  ]
  
  return {
    ...state,
    projects
  }
};

const reducers = {
  SET_APPLICATION_DATA: setApplicationData
}