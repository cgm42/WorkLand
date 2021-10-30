import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import applicationDataReducer, {
  SET_APPLICATION_DATA,
  SET_CURRENT_PROJECT,
  SET_TASK_STATUS,
  SET_TASK_PRIORITY,
  ADD_CREATED_PROJECT,
} from "../../reducers/applicationDataReducer";

export const stateContext = createContext();

export default function StateProvider(props) {
  const [state, dispatch] = useReducer(applicationDataReducer, {
    users: [],
    projects: [],
    projectTeams: [],
    current_project: 1,
    tasks: [],
    taskTeams: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/users"),
      axios.get("/projects"),
      axios.get("/users_projects"),
      axios.get(`/tasks/project/${state.current_project}`),
      axios.get("/users_tasks"),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          users: all[0].data,
          projects: all[1].data,
          projectTeams: all[2].data,
          tasks: all[3].data,
          taskTeams: all[4].data,
        },
      });
    });
  }, []);

  const updateProjectList = () => {
    Promise.all([axios.get("/projects"), axios.get("/users_projects")]).then(
      (all) => {
        dispatch({
          type: SET_APPLICATION_DATA,
          value: {
            ...state,
            projects: all[0].data,
            projectTeams: all[1].data,
          },
        });
      }
    );
  };

  const createProject = (project) => {
    axios
      .post("/projects", project)
      .then(async (data) => {
        const projectTeamsData = await axios.get("/users_projects");

        dispatch({
          type: ADD_CREATED_PROJECT,
          project: data.data,
          projectTeams: projectTeamsData.data,
        });
      })
      .catch((error) => console.log("error", error));
  };

  const editProject = (project, id) => {
    console.log("-------- edit project ---------");
    axios.patch(`/projects/${id}`, project).then(() => {
      updateProjectList();
    });
  };

  const deleteProject = (id) => {
    console.log("-------- delete project ---------");
    axios.delete(`/projects/${id}`).then(() => {
      updateProjectList();
    });
  };

  const setCurrentProject = (id) => {
    console.log("setCurrentProject was called +++++++++++++++++++++");

    axios.get(`/tasks/project/${id}`).then((data) => {
      console.log("-----axios data create project-----", data);
      dispatch({
        type: SET_CURRENT_PROJECT,
        id,
        tasks: data.data,
      });
    });
  };

  const createTask = (task) => {
    axios.post("/tasks", task).then(() => {
      updateTaskList();
    });
  };

  const editTask = (task, id) => {
    axios.patch(`/tasks/${id}`, task).then(() => {
      updateTaskList();
    });
  };

  const deleteTask = (id) => {
    axios.delete(`/tasks/${id}`).then(() => {
      updateTaskList();
    });
  };

  const updateTaskList = () => {
    Promise.all([
      axios.get(`/tasks/project/${state.current_project}`),
      axios.get("/users_tasks"),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          ...state,
          tasks: all[0].data,
          taskTeams: all[1].data,
        },
      });
    });
  };

  const updateTaskStatus = (status, id) => {
    axios.patch(`/tasks/status/${id}`, { status }).then((data) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return data.data;
        } else {
          return task;
        }
      });

      dispatch({
        type: SET_TASK_STATUS,
        tasks: newTasks,
      });
    });
  };

  const updateTaskPriority = (priority, id) => {
    axios.patch(`/tasks/priority/${id}`, { priority }).then((data) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return data.data;
        } else {
          return task;
        }
      });

      dispatch({
        type: SET_TASK_PRIORITY,
        tasks: newTasks,
      });
    });
  };

  const providerData = {
    state,
    createProject,
    editProject,
    deleteProject,
    setCurrentProject,
    createTask,
    editTask,
    updateTaskStatus,
    updateTaskPriority,
    deleteTask,
  };

  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  );
}
