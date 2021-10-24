import React from "react";
import "nes.css/css/nes.min.css";
import "../rpgui.css";
import "./userDashboard.css";
import "../styles/animations.css";
import { FaUserAlt } from "react-icons/fa";
import { FcPieChart } from "react-icons/fc";
import { useState, useEffect } from "react";
// import {useApplicationData} from '../hooks/useApplicationData.js'
import UserInfoCard from "./UserInfoCard";
import axios from "axios";

const UserDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get("/projects"),
      axios.get("/meetings")
    ])
      .then((all) => {
        setProjects(all[0].data);
        setMeetings(all[1].data);
    });
  }, []);

  return (
    <div className="rpgui-content golden">
      <div className="dashboard-layout rpgui-container framed-golden-2">
        <div className="welcome">
          <h1>Dashboard</h1>
        </div>

        <section className="user-info-cards">
          <UserInfoCard heading={"Meetings Today"} meetings={meetings} />
          <div className="card rpgui-container framed float">
            <header>My tasks</header>
            <ul>
              <li>Create new feature for user</li>
              <li>Review Bob's Pull Request</li>
              <li>Commit all my changes before the end of the day</li>
            </ul>
          </div>
          <UserInfoCard heading={"My Projects"} projects={projects} />
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
              <progress
                className="nes-progress is-success"
                value="50"
                max="100"
              ></progress>
            </div>
            <div className="exp-bar"></div>
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
