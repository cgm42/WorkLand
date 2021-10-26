import React from 'react';
import './login.css';
import './index.css';
import { useSelector } from 'react-redux';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
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
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div className='login-container'>
            <div className='login'>
              <BsGithub className='github'/>
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
