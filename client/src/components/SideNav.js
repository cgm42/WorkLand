import React from "react";
import "./styles/SideNav.css";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaClipboardList, FaSpotify } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { RiLogoutCircleFill } from "react-icons/ri";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import ProjectCardList from "./projects/projectCardList";
import Messages from "../pages/Messages";
import Login from "../pages/Login";
import UserDashboard from "./userDashboard/UserDashboard";
import Tasks from './tasks/Tasks';


const Sidenav = () => {
  return (
    <Router>
      <div className="sidebar">
        <div className="sidebar-top">
          <li>
            <Link to="/">
              <AiFillHome></AiFillHome>
            </Link>
          </li>
          <li>
            <Link to="/project">
              <FaClipboardList></FaClipboardList>
            </Link>
          </li>
          <li>
            <Link to="/tasks">
              <MdGroup></MdGroup>
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <AiFillMessage></AiFillMessage>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <AiFillMessage></AiFillMessage>
            </Link>
          </li>
        </div>
        </div>

      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>
        </Route>

        <Route path="/project" exact>
          <ProjectCardList></ProjectCardList>
        </Route>

        <Route path="/tasks" exact>
          <Tasks></Tasks>
        </Route>

        <Route path="/messages" exact>
          <Messages></Messages>
        </Route>

        <Route path="/dashboard" exact>
          <UserDashboard></UserDashboard>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route>

        userDashboard
      </Switch>
    </Router>
  );
};

export default Sidenav;
