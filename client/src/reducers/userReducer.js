import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    avatar: "",
  },
};
//a reducer example
export const SET_USER = createAction("SET_USER");
export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_USER, (state, action) => {
    console.log("action.payload :>> ", action.payload);
    state.user.name = action.payload.name;
    state.user.avatar = action.payload.avatar;
  });
});
