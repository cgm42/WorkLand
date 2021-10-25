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
    current_project: 1
  })

  useEffect(() => {
    Promise.all([
      axios.get("/users"),
      axios.get("/projects")
    ])
      .then(all => {
        console.log("in main query",all[0].data)
        dispatch({
          type: SET_APPLICATION_DATA,
          value: {
            users: all[0].data,
            projects: all[1].data
          }
        })
      });
  }, []);

  
  const updateProjectList = () => {
    axios.get("/projects")
    .then(data => {
      dispatch({
        type: SET_APPLICATION_DATA,
        value: {
          users: state.users,
          projects: data.data
        }
      })
    })
  };

  const addUserToProject = () => {
    const userProject = {
      user_id: userState.id,
      project_id: state.current_project,
      role: 'Project Manager'
    }

    axios.post("/users_projects", userProject);
  };

  
  const createProject = project => {
    axios.post('/projects', project)
      // .then(data => {
      //   console.log("data in createProject");
      //   dispatch({
      //     type: SET_CURRENT_PROJECT,
      //     id: data.data
      //   })
      // })
      .then(() => {
        updateProjectList();
      });
  };

  return {
    state,
    createProject
  }
};