import React from 'react';
import '../components/styles/dashboard.css';
import { FaUserAlt } from "react-icons/fa";
import { FcPieChart } from "react-icons/fc";
const Dashboard = () => {
  return (
    <div className='dashboard-layout'>
      <div className='welcome'>
        <h1>Welcome to your Dashboard User</h1>
      </div>

      <section className='user-info-cards'>
        <div className='card'>
          <header>Meetings Today</header>
          <ul>
            <li>Google: 9AM</li>
            <li>Facebook: 11AM</li>
            <li>Youtube: 4PM</li>
          </ul>
        </div>
        <div className='card'>
          <header>My tasks</header>
          <ul>
            <li>Create new feature for user</li>
            <li>Review Bob's Pull Request</li>
            <li>Commit all my changes before the end of the day</li>
          </ul>
        </div>
        <div className='card'>
          <header>My projects</header>
          <ul>
            <li>Final</li>
            <li>Tweeter</li>
            <li>Tweeter</li>
          </ul>
        </div>
      </section>

      <section className='level-chart-cards'>
        <div className='user-progress'>
          <div className='user'>
            <FaUserAlt className="user-icon"></FaUserAlt>
            <p>Level 80</p>
          </div>
          <div className='experience-bar'> 
          
          </div>
        </div>
        <div className='pie-chart'> 
        <p>Task Tracker</p>
        <FcPieChart className='chart'></FcPieChart>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
