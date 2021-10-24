import React from "react";
import "./styles/SideNav.css";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaClipboardList, FaSpotify } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { RiLogoutCircleFill } from "react-icons/ri";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Meeting from "../pages/Meeting";
import Messages from "../pages/Messages";
import Login from "../pages/Login";
import UserDashboard from "./userDashboard/UserDashboard";


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
            <Link to="/meeting">
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

        <div className="sidebar-bottom">
          <li>
            <Link to="/">
              <FaSpotify></FaSpotify>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/">
              <BsFillAlarmFill></BsFillAlarmFill>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/login">
              <RiLogoutCircleFill></RiLogoutCircleFill>
            </Link>
          </li>
        </div>
      </div>

      <Switch>
        <Route path="/" exact>
          <Dashboard></Dashboard>
        </Route>

        <Route path="/project" exact>
          <Projects></Projects>
        </Route>

        <Route path="/meeting" exact>
          <Meeting></Meeting>
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
