// view: dashboard, projects, projects dashboard, tasks, kanban, gantt, meeting room
//user
import { createAction, createReducer } from "@reduxjs/toolkit";
// import {createReducer} from "react-redux"

interface stateType {
  user: {
    name: string;
    avatar: string;
  };
}

const initialState: stateType = {
  user: {
    name: "",
    avatar: "",
  },
};

const updateUser = createAction<string, "updateUser">("user/update");

const useReducer = createReducer(initialState, (builder) => {
  builder.addCase("user/update", (state, action: PayloadAction<string>) => {
    state.user.name = action.payload.name;
    state.user.avatar = action.payload.avatar;
  });
});
