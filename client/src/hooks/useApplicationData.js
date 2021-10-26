import { useReducer, useEffect } from "react";
import axios from "axios";
import applicationDataReducer, {
  SET_APPLICATION_DATA,
  SET_CURRENT_PROJECT
} from "../reducers/applicationDataReducer"
import { useSelector } from "react-redux";

export default function useApplicationData() {
  const userState = useSelector((state) => {
    console.log('state:', state);
    return state.user;
  });

  const [state, dispatch] = useReducer(applicationDataReducer, {
    users: [],
    projects: [],
    projectTeams: [],
    current_project: 1
  })

  useEffect(() => {
    Promise.all([
      axios.get("/users"),
      axios.get("/projects"),
      axios.get("/users_projects")
    ])
      .then(all => {
        dispatch({
          type: SET_APPLICATION_DATA,
          value: {
            users: all[0].data,
            projects: all[1].data,
            projectTeams: all[2].data
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
      .then(() => {
        updateProjectList();
      });
  };

  return {
    state,
    createProject
  }
};