import React from 'react';
import './styles/SideNav.css';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { FaClipboardList, FaSpotify } from 'react-icons/fa';
import { MdGroup } from 'react-icons/md';
import { GrLineChart } from 'react-icons/gr';
import { BsFillAlarmFill, BsKanbanFill } from 'react-icons/bs';
import { RiDashboardFill, RiLogoutCircleFill } from 'react-icons/ri';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ProjectCardList from './projects/projectCardList';
import Messages from '../pages/Messages';
import Login from '../pages/Login';
import UserDashboard from './userDashboard/UserDashboard';
import TaskTable from './tasks/TaskTable';
import Kanban from './kanban/Kanban';
import GanttChart from './gantt-chart/GanttChart';

const Sidenav = () => {
  return (
    <Router>
      <div className='sidebar'>
      <h1>WorkLand</h1>
        <div className='sidebar-top'>
          <li>
            <Link to='/'></Link>
          </li>
          <li>
            <Link to='/project'>
              <FaClipboardList></FaClipboardList>
            </Link>
          </li>
          <li>
            <Link to='/tasks'></Link>
          </li>
          <li>
            <Link to='/dashboard'></Link>
          </li>
          <li>
            <Link to='/kanban'></Link>
          </li>
          <li>
            <Link to='/gantt'></Link>
          </li>
        </div>
      </div>

      <Switch>
        <Route path='/' exact>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/project' exact>
          <ProjectCardList />
        </Route>
        <Route path='/tasks' exact>
          <TaskTable />
        </Route>
        <Route path='/messages' exact>
          <Messages></Messages>
        </Route>
        <Route path='/dashboard' exact>
          <UserDashboard></UserDashboard>
        </Route>
        <Route path='/kanban' exact>
          <Kanban></Kanban>
        </Route>
        <Route path='/gantt' exact>
          <GanttChart></GanttChart>
        </Route>
        {/* <Route path="/login" exact>
          <Login></Login>
        </Route> */}
        userDashboard
      </Switch>
    </Router>
  );
};

export default Sidenav;
