import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  const userState = useSelector((state) => {
    return state.user;
  });

  return (
    <div className="app">
      {!userState.name === "" ? (
        <div> {userState.name}</div>
      ) : (
        <a href={process.env.REACT_APP_GITHUB_LOGIN}>login with github</a>
        // <a href="https://github.com/login/oauth/authorize?client_id=b0010984d0eaf27b2a38">
        //   login with github
        // </a>
      )}
      <p>
        <a href="/logout">logout</a>
      </p>
    </div>
  );
};

export default Login;
