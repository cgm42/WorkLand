import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from "../reducers/userReducer";

import "../components/styles/dashboard.css";
import "../components/styles/animations.css";
import Players from "../components/players";
import Map from "../components/map/Map";
import ModalInput from "../components/avatarModal/ModalInput";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("/user").then((data) => {
      console.log(data);
      dispatch(SET_USER({ name: data.data.name, id: data.data.person_id })); //TODO:add avatar
    });
  }, [dispatch]);

  const userState = useSelector((state) => {
    return state.user;
  });

  return (
    <div className="dashboard-layout">
      {/* <div className="welcome">
        <h1>Welcome to your Dashboard {userState.name}</h1>
      </div> */}

      <ModalInput isOpen={true} />
      <Map x={0} />
      <Players />

      {/* <section className="user-info-cards">
        <div className="card float">
          <header>Meetings Today</header>
          <ul>
            <li>Google: 9AM</li>
            <li>Facebook: 11AM</li>
            <li>Youtube: 4PM</li>
          </ul>
        </div>
        <div className="card float">
          <header>My tasks</header>
          <ul>
            <li>Create new feature for user</li>
            <li>Review Bob's Pull Request</li>
            <li>Commit all my changes before the end of the day</li>
          </ul>
        </div>
        <div className="card float">
          <header>My projects</header>
          <ul>
            <li>Final</li>
            <li>Tweeter</li>
            <li>Tweeter</li>
          </ul>
        </div>
      </section>

      <section className="level-chart-cards">
        <div className="user-progress">
          <div className="user">
            <FaUserAlt className="user-icon"></FaUserAlt>
            <p>Level 80</p>
          </div>
          <div className="experience-bar"></div>
        </div>
        <div className="pie-chart">
          <p>Task Tracker</p>
          <FcPieChart className="chart"></FcPieChart>
        </div>
      </section> */}
    </div>
  );
};

export default Dashboard;
