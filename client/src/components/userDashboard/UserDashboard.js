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
import useWindowDimensions from '../../hooks/useWindowDimensions';
function UserDashboard() {
  const [projects, setProjects] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const { width, height } = useWindowDimensions();

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
    <div className='main-dashboard-layout'>
      <div className='welcome'>
        <h1>About</h1>
        <hr style={{ width: '200px' }}></hr>
      </div>

      {/* {height <= 1200 ? (
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
      ) : (
        <div />
      )} */}

      <section className='user-welcome'>
        <h2>Thanks for visiting WorkLand</h2>
        <p style={{ fontSize: '16px' }}>
          Our mission is to be productive as a team and stay connected, no
          matter where we are. We do this by creating a metaverse for tech teams
          to manage projects, get work done and have fun together.
        </p>
        <span />
        <span />
        {/* <hr style={{ width: '200px' }}></hr> */}
        <h3>Built with: </h3>
        <hr style={{ width: '200px' }}></hr>
        <p>
          JavaScript TypeScript React Redux Websocket Node Express PostgreSQL
        </p>

        <div className='the-team'>
          <section className='nes-container is-dark member-card'>
            <div className='avatar'>
              <img
                style={{ width: '180px' }}
                alt='profile pic'
                src='	https://avatars.githubusercontent.com/u/38818956?v=4'
                target='_blank'
              />
            </div>
            <div className='profile'>
              <h4 className='name'>{'Carrie'}</h4>
              <div>
                <a
                  href='https://github.com/cgm42'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='nes-icon github'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/carriegeng/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='nes-icon linkedin'></i>
                </a>
              </div>
            </div>
          </section>

          <section className='nes-container is-dark member-card'>
            <div className='avatar'>
              <img
                style={{ width: '180px' }}
                alt='profile pic'
                src='	https://avatars.githubusercontent.com/u/86113795?v=4'
              />
            </div>
            <div className='profile'>
              <h4 className='name'>{'Johnny'}</h4>
              <div>
                <a
                  href='https://github.com/jlabedzki'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='nes-icon github'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/johnny-labedzki-5bb4b220a/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='nes-icon linkedin'></i>
                </a>
              </div>
            </div>
          </section>

          <section className='nes-container is-dark member-card'>
            <div className='avatar'>
              <img
                style={{ width: '180px' }}
                alt='profile pic'
                src='	https://avatars.githubusercontent.com/u/82417707?v=4'
              />
            </div>
            <div className='profile'>
              <h4 className='name'>{'Jose'}</h4>
              <div>
                <a
                  href='https://github.com/Josebautista10'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='nes-icon github'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/jose-bautista-a323b6217/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='nes-icon linkedin'></i>
                </a>
              </div>
            </div>
          </section>
        </div>
        <br></br>
        <h3>Sources </h3>
        <hr style={{ width: '200px' }}></hr>
        <p style={{ fontSize: '15px' }}>
          This project uses licensed assets from {' '}
          <a
            href='https://limezu.itch.io/'
            rel='noopener noreferrer'
            target='_blank'
          >
            @limezu{' '}
          </a>
          and {' '}
          <a
            href='https://codepen.io/punkydrewster713'
            rel='noopener noreferrer'
            target='_blank'
          >
            Drew Conley
          </a>
          .
        </p>
      </section>
    </div>
  );
}

export default UserDashboard;
