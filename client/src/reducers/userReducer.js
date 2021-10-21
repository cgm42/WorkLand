import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {};
//a reducer example
export const SET_USER = createAction("SET_USER");
export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(SET_USER, (state, action) => {
    state = action.payload;
  });
});
