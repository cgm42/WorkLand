import { useReducer, useEffect } from "react";
import axios from "axios";
import applicationDataReducer, {
  SET_APPLICATION_DATA
} from "../reducers/applicationDataReducer"

export default function useApplicationData() {
  const [state, dispatch] = useReducer(applicationDataReducer, {
    projects: []
  })

  useEffect(() => {
    Promise.all([
      axios.get("/projects")
    ])
      .then(all => {
        dispatch({
          type: SET_APPLICATION_DATA,
          value: {
            projects: all[0].data
          }
        })
      });
  }, []);

  return {
    state
  }
};