import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
import { useSelector } from 'react-redux';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
  const userState = useSelector((state) => {
    console.log('state:', state);
    return state.user;
  });
  console.log(process.env);
  return (
    <div className='app'>
      {userState.name !== '' ? (
        <div></div>
      ) : (
        <>
          <div className='login'>
            <div>
              <button>
                <a href='/login'>login</a>
              </button>
            </div>
            <div>
              <BsGithub />
              <a href={process.env.REACT_APP_GITHUB_LOGIN}>
                {' Log in with Github'}
              </a>
            </div>
          </div>
        </>
      )}

      {userState.name !== '' ? <a href='/logout'>logout</a> : <div> </div>}
    </div>
  );
};

export default Login;
