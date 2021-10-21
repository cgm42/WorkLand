import React from "react";
import "./styles/SideNav.css";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaClipboardList, FaSpotify } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { RiLogoutCircleFill } from "react-icons/ri";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Meeting from "../pages/Meeting";
import Messages from "../pages/Messages";

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
            {" "}
            <Link to="/tasks">
              <FaClipboardList></FaClipboardList>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/meeting">
              <MdGroup></MdGroup>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/messages">
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

        <Route path="/tasks" exact>
          <Tasks></Tasks>
        </Route>

        <Route path="/meeting" exact>
          <Meeting></Meeting>
        </Route>

        <Route path="/messages" exact>
          <Messages></Messages>
        </Route>

        <Route path="/dashboard" exact>
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>
  );
};

export default Sidenav;
