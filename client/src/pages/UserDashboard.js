import React from "react";
import "nes.css/css/nes.min.css";
import "../components/rpgui.css";
import "../components/styles/dashboard.css";
import "../components/styles/animations.css";
import { FaUserAlt } from "react-icons/fa";
import { FcPieChart } from "react-icons/fc";
// import {useApplicationData} from '../hooks/useApplicationData.js'
import { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  useEffect(() => {
    axios.get("/projects")
      .then(all => {
        console.log(all.data);
      })
  }, []);

  return (
    <div className="rpgui-content golden">

    <div className="dashboard-layout rpgui-container framed-golden-2">
      <div className="welcome">
        <h1>Dashboard</h1>
      </div>

      <section className="user-info-cards">
          <div className="card rpgui-container framed float">

            <header>Meetings Today</header>
            <ul>
              <li>Google: 9AM</li>
              <li>Facebook: 11AM</li>
              <li>Youtube: 4PM</li>
            </ul>
          </div>
        <div className="card rpgui-container framed float">
          <header>My tasks</header>
          <ul>
            <li>Create new feature for user</li>
            <li>Review Bob's Pull Request</li>
            <li>Commit all my changes before the end of the day</li>
          </ul>
        </div>
        <div className="card rpgui-container framed float">
          <header>My projects</header>
          <ul>
            <li>Final</li>
            <li>Tweeter</li>
            <li>Tweeter</li>
          </ul>
        </div>
      </section>

      <section className="level-chart-cards">
        <div className="user-progress rpgui-container framed-golden">
          <div className="user">
            <FaUserAlt className="user-icon"></FaUserAlt>
          </div>
          <div className="user-info">
            <div className="user-info-text">
              <p>Name</p>
              <p>Lvl:</p>
            </div>
            <progress className="nes-progress is-success" value="50" max="100"></progress>
          </div>
          <div className="exp-bar">
        </div>
        </div>
        <div className="pie-chart rpgui-container framed-golden">
          <p>Task Tracker</p>
          <FcPieChart className="chart"></FcPieChart>
        </div>
      </section>
    </div>
    </div>
  );
};

export default UserDashboard;
