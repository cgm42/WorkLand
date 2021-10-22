import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from "../reducers/userReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/user").then((data) => {
      dispatch(SET_USER({ name: data.data.name, avatar: data.data.person_id })); //TODO:
    });
  }, [dispatch]);

  const userState = useSelector((state) => {
    return state.user;
  });

  return (
    <div className="dashboard-layout">
      <div className="welcome">
        <h1>Welcome to your Dashboard {userState.name}</h1>
      </div>

      <div className="user-info-cards"></div>
    </div>
  );
};

export default Dashboard;
