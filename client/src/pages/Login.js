import React, { useEffect } from 'react';
import './login.css';
import './index.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from '../reducers/mapReducer';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get('/user', {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data);
        dispatch(SET_USER(data.data));
      });
  }, [dispatch]);

  const userState = useSelector((state) => {
    console.log('state:', state);
    return state.user;
  });
  console.log(process.env);
  return (
    <div className="background">
      {userState.name !== '' ? (
        <div></div>
      ) : (
        <>
          <div className="login-container">
            <div className="login">
              <BsGithub className="github" />
              <a href={process.env.REACT_APP_GITHUB_LOGIN}>
                {' Log in with Github'}
              </a>
            </div>
          </div>
          <div className="stars-login">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
        </>
      )}

      {userState.name !== '' ? <a href="/logout">logout</a> : <div> </div>}
    </div>
  );
};

export default Login;
