export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const SET_CURRENT_PROJECT = "SET_CURRENT_PROJECT";
export const SET_TASK_STATUS = "SET_TASK_STATUS";
export const SET_TASK_PRIORITY = "SET_TASK_PRIORITY";

export default function applicationDataReducer(state, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}

const setApplicationData = (state, action) => ({
  ...state,
  users: action.value.users,
  projects: action.value.projects,
  projectTeams: action.value.projectTeams,
  tasks: action.value.tasks,
  taskTeams: action.value.taskTeams,
});

const setCurrentProject = (state, action) => {
  const tasks = giveTasksIndices(action.tasks);

  const newState = {
    ...state,
    current_project: action.id,
    tasks: tasks,
  };

  return newState;
};

const updateTaskStatus = (state, action) => {
  const tasks = giveTasksIndices(action.tasks);
  const newState = {
    ...state,
    tasks: tasks,
  };

  return newState;
};

const updateTaskPriority = (state, action) => {
  const tasks = giveTasksIndices(action.tasks);
  const newState = {
    ...state,
    tasks: tasks,
  };

  return newState;
};

const giveTasksIndices = (tasks) => {
  const column1 = tasks
    .filter((task) => task.currentStatus === 3)
    .map((task, index) => {
      return { ...task, columnIndex: index };
    });
  const column2 = tasks
    .filter((task) => task.currentStatus === 0)
    .map((task, index) => {
      return { ...task, columnIndex: index };
    });
  const column3 = tasks
    .filter((task) => task.currentStatus === 1)
    .map((task, index) => {
      return { ...task, columnIndex: index };
    });
  const column4 = tasks
    .filter((task) => task.currentStatus === 2)
    .map((task, index) => {
      return { ...task, columnIndex: index };
    });

  const newTasks = column1.concat(column2, column3, column4);

  const sortedTasks = newTasks.sort((a, b) => {
    return a.id - b.id;
  });

  return sortedTasks;
};

const reducers = {
  SET_APPLICATION_DATA: setApplicationData,
  SET_CURRENT_PROJECT: setCurrentProject,
  SET_TASK_STATUS: updateTaskStatus,
  SET_TASK_PRIORITY: updateTaskPriority,
};
