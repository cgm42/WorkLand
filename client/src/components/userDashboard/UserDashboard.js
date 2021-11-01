import React from 'react';
import 'nes.css/css/nes.min.css';
import '../rpgui.css';
import '../styles/animations.css';
import './userDashboard.css';
import { FaUserAlt } from 'react-icons/fa';
import { FcPieChart } from 'react-icons/fc';
import { useState, useEffect } from 'react';
// import {useApplicationData} from '../hooks/useApplicationData.js'
import UserInfoCard from './UserInfoCard';
import axios from 'axios';
import { useSelector } from 'react-redux';

function UserDashboard() {
  const [projects, setProjects] = useState([]);
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    Promise.all([axios.get('/projects'), axios.get('/meetings')]).then(
      (all) => {
        setProjects(all[0].data);
        setMeetings(all[1].data);
      }
    );
  }, []);

  const userState = useSelector((state) => {
    console.log('state:', state);
    return state.user;
  });

  return (
    <div className='dashboard-layout nes-container is-rounded is-dark'>
      <div className='welcome'>
        <h1>{userState.name}'s Dashboard </h1>
        <hr></hr>
      </div>

      <section className='user-welcome'>
        <h1>Welcome To WorkLand</h1>
        <p>
          WorkLand is a place that allows you to have a fun environment while
          being at work. It's a project management app unlike others, it allows
          you to see your projects, tasks, schedule but not the way you are used
          to. We want you to feel like you're not using a workplace app. So to
          do that we made the whole app with an 8-bit font and also gave you the
          option to choose a character to give it that game like feel.
        </p>
      </section>

      <section className='level-chart-cards'>
        <div className='user-progress nes-container is-rounded'>
          <div className='user'>
            <img src={userState.avatar} className='user-img'></img>
            <div className='user-info-text'>
              <p>{userState.name}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
