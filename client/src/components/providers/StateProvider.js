import {createContext, useReducer, useEffect } from "react";
import axios from "axios";
import applicationDataReducer, {
  SET_APPLICATION_DATA,
  SET_CURRENT_PROJECT
} from "../../reducers/applicationDataReducer";
// import { useSelector } from "react-redux";

export const stateContext = createContext();

export default function StateProvider(props) {
  // const userState = useSelector((state) => {
  //   console.log('state:', state);
  //   return state.user;
  // });

  const [state, dispatch] = useReducer(applicationDataReducer, {
    users: [],
    projects: [],
    projectTeams: [],
    current_project: null,
    tasks: [],
    taskTeams: []
  })

  useEffect(() => {
    Promise.all([
      axios.get("/users"),
      axios.get("/projects"),
      axios.get("/users_projects"),
      // axios.get(`/tasks/project/${state.current_project}`),
      axios.get("/users_tasks")
    ])
      .then(all => {
        dispatch({
          type: SET_APPLICATION_DATA,
          value: {
            users: all[0].data,
            projects: all[1].data,
            projectTeams: all[2].data,
            // tasks: all[3].data,
            taskTeams: all[3].data
          }
        })
      });
  }, []);

  
  const updateProjectList = () => {
    Promise.all([
      axios.get("/projects"),
      axios.get("/users_projects")
    ])
    .then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          ...state,
          projects: all[0].data,
          projectTeams: all[1].data
        }
      })
    })
  };
  
  const createProject = project => {
    axios.post('/projects', project)
      .then((data) => {
        setCurrentProject(data.data.id);
        updateProjectList();
      });
  };

  const setCurrentProject = id => {
    dispatch({
      type: SET_CURRENT_PROJECT,
      id
    });

    axios.get(`/tasks/project/${id}`)
      .then(data => {
        dispatch({
          type: SET_APPLICATION_DATA,
          value: {
            ...state,
            tasks: data.data
          }
        });
      });
  };

  const createTask = task => {
    axios.post('/tasks', task)
    .then(() => {
      updateTaskList();
    })
  };
  
  const updateTaskList = () => {
    Promise.all([
      axios.get(`/tasks/project/${state.current_project}`),
      axios.get("/users_tasks")
    ])
    .then(all => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          ...state,
          tasks: all[0].data,
          taskTeams: all[1].data
        }
      })
    })
  };

  // const editProject = project => {
  //   const id = project.id

  //   axios.patch(`/projects/${id}`)
  //     .then(() => {
  //       updateProjectList();
  //     })
  // }

  const providerData = {
    state,
    createProject,
    setCurrentProject,
    createTask
  }

  return (
    <stateContext.Provider value={providerData}>
      {props.children}
    </stateContext.Provider>
  )
};