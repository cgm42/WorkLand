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
    // console.log('state:', state);
    return state.user;
  });

  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      className="dashboard-layout nes-container is-rounded is-dark">
      <div className="welcome">
        <h1>About</h1>
        <hr style={{ width: '200px' }}></hr>
      </div>

      <div className="user-progress nes-container is-rounded">
        <div className="user">
          <img src={userState.avatar} className="user-img"></img>
          <div
            style={{ display: 'flex', flexDirection: 'column' }}
            className="user-info-text">
            <p>{userState.name}</p>
            <p>user #{userState.id}</p>
          </div>
        </div>
      </div>

      <section className="user-welcome">
        <h1>Thanks for visiting us!</h1>
        <p>
          WorkLand is a virtual workspace with built in project management tools
          designed for tech teams.
        </p>
        <span />
        <hr style={{ width: '200px' }}></hr>
        <h3>Built with: </h3>
        <p>
          JavaScript TypeScript React Redux Websocket Node Express PostgreSQL
        </p>
        <hr style={{ width: '200px' }}></hr>

        <div style={{ display: 'flex' }}>
          <section className="nes-container is-dark member-card">
            <div className="avatar">
              <img
                style={{ width: '200px' }}
                alt="profile pic"
                src="	https://avatars.githubusercontent.com/u/38818956?v=4"
                target="_blank"
              />
            </div>
            <div className="profile">
              <h4 className="name">{'Carrie G'}</h4>
              <div>
                <a
                  href="https://github.com/cgm42"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i class="nes-icon github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/carriegeng/"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i class="nes-icon linkedin"></i>
                </a>
              </div>
            </div>
          </section>

          <section className="nes-container is-dark member-card">
            <div className="avatar">
              <img
                style={{ width: '200px' }}
                alt="profile pic"
                src="	https://avatars.githubusercontent.com/u/86113795?v=4"
              />
            </div>
            <div className="profile">
              <h4 className="name">{'Johnny L'}</h4>
              <div>
                <a
                  href="https://github.com/jlabedzki"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i class="nes-icon github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/johnny-labedzki-5bb4b220a/"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i class="nes-icon linkedin"></i>
                </a>
              </div>
            </div>
          </section>

          <section className="nes-container is-dark member-card">
            <div className="avatar">
              <img
                style={{ width: '200px' }}
                alt="profile pic"
                src="	https://avatars.githubusercontent.com/u/82417707?v=4"
              />
            </div>
            <div className="profile">
              <h4 className="name">{'Jose B'}</h4>
              <div>
                <a
                  href="https://github.com/Josebautista10"
                  rel="noopener noreferrer"
                  target="_blank">
                  <i class="nes-icon github"></i>
                </a>
                <a>
                  <i class="nes-icon linkedin"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default UserDashboard;
